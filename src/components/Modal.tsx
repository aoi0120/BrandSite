import { useBrands } from '../hooks/useBrands'

interface ModalProps {
    showFlag: boolean,
    setShowModal:(value:boolean) => void,
    selectedBrandName: string
};

export const Modal: React.FC<ModalProps> = ({ showFlag,setShowModal,selectedBrandName })=> {
    const { brandDates } = useBrands();
    
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
                        <div>
                            
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