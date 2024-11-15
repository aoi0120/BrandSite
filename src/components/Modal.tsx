import { useBrands } from './../hook/useBrands'

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

    const brand = brandDates.find((data) => data.name === selectedBrandName)

    if(!showFlag || !selectedBrandName || !brand) return null;

    return (
        <>
            {showFlag ? ( //ture
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-800 bg-opacity-40">
                    <div className="bg-white p-10 rounded-md">
                        <h2 className='text-lg'>{brand.name}</h2>
                        <img src={brand.photo_url} alt="" />
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            ) : ( //false
                <></>
            )}
        </>
    )

    
}