import { Header } from './components/header'
import { Footer } from './Footer'
import { useBrands } from './hook/useBrands'
import { Modal } from "./components/Modal"
import { useState } from 'react'

export const App = () => {
  const { brandDates } = useBrands();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  const ShowModal = (brandName: string) => {
    setSelectedBrand(brandName)
    setShowModal(true);
  }

  return (
    <div className='bg-slate-300 overflow-hidden'>
      <Header />
      <div className='z-30 top-0 relative w-screen h-screen bg-cover bg-center' style={{backgroundImage: 'url(./../public/mainBlack.png)'}}>
      <h1 className='text-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-[100px] text-white'>好きを見つけよう</h1>
      </div>
      <Modal showFlag={showModal} setShowModal={setShowModal} selectedBrandName={selectedBrand} />
      <div className='main center flex md:flex-row md:flex-wrap md:-mx-5 justify-center'>
        {brandDates.map((brand) => (
          <button onClick={() => ShowModal(brand.name)} key={brand.name} className='contains md:w-1/3 md:px-5 xl:w-1/4 m-5 bg-white h-[300px] rounded-2xl'>
            <img className='block m-auto container object-center w-[250px] h-[250px]' src={brand.photo_url} alt={brand.name} />
            <h2 className='text-center flex column justify-center mt-[4px] text-lg'>{brand.name}({brand.name_hira})</h2>
          </button>
        ))}

      </div>
      <Footer />
    </div>
  )
}

