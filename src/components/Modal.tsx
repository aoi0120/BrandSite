import { useCallback, useEffect } from 'react';
import { useBrands } from '../hooks/useBrands';
import { useItems } from '../hooks/useItems';
import { ProductGrid } from './ProductGrid';
import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({ showFlag, setShowModal, selectedBrandName }) => {
    const { brandData = [] } = useBrands();
    const { items = [] } = useItems();

    //モーダルが開いたときにスクロールを無効化
    useEffect(() => {
        if (showFlag) {
            const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollWidth}px`
        }
        return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "";
        }
    }, [showFlag])

    //モーダル閉じる
    const closeModal = useCallback(() => {
        setShowModal(false);
    }, [setShowModal]);

    //モーダル外クリックで閉じる
    const handleOutsideClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) closeModal();
        }, [closeModal]
    );

    //showFlagがfalseならreturn nullで返す
    if (!showFlag) return null;

    //ブランド情報取得
    const brand = brandData.find((data) => data.name === selectedBrandName)

    //存在しないブランドならモーダル表示しない
    if (!selectedBrandName || !brand) return null;

    return (
        <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-800 bg-opacity-40" onClick={handleOutsideClick}>
            <div className="bg-white p-10 rounded-md mx-10 mt-7 w-full h-full overflow-scroll">
                <ProductGrid items={items} brandId={brand.id} />
            </div>
        </div>
    )
}