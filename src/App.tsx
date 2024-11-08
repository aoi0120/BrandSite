// import { useState } from 'react'
import { Header } from './components/header'
import { Footer } from './Footer'

//testData
const brandData = [
  { name: "グローブトロッター", tag: "globe", image: "./../public/globe.webp" },
  { name: "オールデン", tag: "globe", image: "./../public/169115453.webp" },
  { name: "グッチ", tag: "globe", image: "./../public/1111.webp" },
  { name: "グローブトロッター", tag: "globe", image: "./../public/globe.webp" },
]

export const App = () => {

  return (
    <div className='bg-slate-300 overflow-hidden'>
      <Header />

      <div className='main center flex md:flex-row md:flex-wrap md:-mx-5 justify-center'>
        {brandData.map((brand, index) => (
          <div key={index} className='contains md:w-1/3 md:px-5 xl:w-1/4 m-5 bg-white h-[300px] rounded-2xl'>
            <img className='block m-auto container object-center w-[250px] h-[250px]' src={brand.image} alt={brand.name} />
            <h2 className='text-center flex column justify-center mt-[4px] text-lg'>{brand.name}</h2>
          </div>
        ))}

      </div>
      <Footer />
    </div>
  )
}


