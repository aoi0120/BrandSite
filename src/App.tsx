import { Header } from './components/header'
import { Footer } from './Footer'
import { useBrands } from './hook/useBrands'
import { Modal } from "./components/Modal"
import { useState } from 'react'

export const App = () => {
  const { brandDates } = useBrands();
  const [showModal, setShowModal] = useState<boolean>(false);

  const ShowModal = () => {
    setShowModal(true);
  }

  return (
    <div className='bg-slate-300 overflow-hidden'>
      <Header />
      <Modal showFlag={showModal} setShowModal={setShowModal}  />
      <div className='main center flex md:flex-row md:flex-wrap md:-mx-5 justify-center'>
        {brandDates.map((brand, index) => (
          <button onClick={ShowModal} key={index} className='contains md:w-1/3 md:px-5 xl:w-1/4 m-5 bg-white h-[300px] rounded-2xl'>
            <img className='block m-auto container object-center w-[250px] h-[250px]' src={brand.photo_url} alt={brand.name} />
            <h2 className='text-center flex column justify-center mt-[4px] text-lg'>{brand.name}({brand.name_hira})</h2>
          </button>
        ))}

      </div>
      <Footer />
    </div>
  )
}

