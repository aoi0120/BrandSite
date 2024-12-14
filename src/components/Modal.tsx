import { useBrands } from '../hooks/useBrands'
import { useItems } from '../hooks/useItems'

interface ModalProps {
    showFlag: boolean,
    setShowModal:(value:boolean) => void,
    selectedBrandName: string
};

export const Modal: React.FC<ModalProps> = ({ showFlag,setShowModal,selectedBrandName })=> {
    const { brandDates } = useBrands();
    const { items } = useItems();
    
    const closeModal = () => {
        setShowModal(false);
    };

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const brand = brandDates.find((data) => data.name === selectedBrandName)

    if(!showFlag || !selectedBrandName || !brand) return null;

    return (
        <>
            {showFlag ? ( //ture
                <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-800 bg-opacity-40" onClick={handleOutsideClick}>
                    <div className="bg-white p-10 rounded-md mx-10 mt-7 w-full h-full">
                        {/* <h2 className='text-lg fixed'>{brand.name}</h2> */}
                        <div className='flex flex-wrap'>
                            {items.filter(item => item.brand_id === brand.id).map((item) => (
                                <div key={item.id} className='w-1/4 p-2 border-2 mx-2 mb-2'>
                                    <img className='w-full' src={item.photo_url} alt={item.name} />
                                    <div className=''>
                                        <h3>{item.name}</h3>
                                        <a href={item.link_url}>商品詳細</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* <button onClick={closeModal}>Close</button> */}
                    </div>
                </div>
            ) : ( //false
                <></>
            )}
        </>
    )
}