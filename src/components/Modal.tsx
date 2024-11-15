interface ModalProps {
    showFlag: boolean,
    setShowModal:(value:boolean) => void;
};

export const Modal: React.FC<ModalProps> = ({ showFlag,setShowModal })=> {

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showFlag ? ( //ture
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-800 bg-opacity-40">
                    <div className="bg-white p-10 rounded-md">
                        <p>This is ModalContent</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            ) : ( //false
                <></>
            )}
        </>
    )

    
}