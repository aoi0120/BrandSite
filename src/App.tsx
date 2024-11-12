import { Header } from './components/header'
import { Footer } from './Footer'
import { useBrands } from './hook/useBrands'

export const App = () => {
  const { brandDates } = useBrands();
  return (
    <div className='bg-slate-300 overflow-hidden'>
      <Header />

      <div className='main center flex md:flex-row md:flex-wrap md:-mx-5 justify-center'>
        {brandDates.map((brand, index) => (
          <div key={index} className='contains md:w-1/3 md:px-5 xl:w-1/4 m-5 bg-white h-[300px] rounded-2xl'>
            <a href={brand.url}>
            <img className='block m-auto container object-center w-[250px] h-[250px]' src={brand.photo_url} alt={brand.name} />
            <h2 className='text-center flex column justify-center mt-[4px] text-lg'>{brand.name_hira}</h2>
            </a>
          </div>
        ))}

      </div>
      <Footer />
    </div>
  )
}


