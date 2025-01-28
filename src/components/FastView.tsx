import { motion } from 'framer-motion'
import { FastText } from './FastText'

export const FastView = () => {
return (
<div className='z-0 top-0 relative w-screen h-screen bg-cover bg-center' style={{ backgroundImage: 'url(./../public/mainBlack.png)' }}>
          <h1 className='stroke-black text-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-[100px] text-neutral-200 font-Garamond'><FastText /></h1>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 5 }}
        >
          <p className='text-center absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-[78%] text-[40px] w-[1300px] text-neutral-200 bg-opacity-80 bg-slate-900 p-4 rounded-md'>このサイトは、人気や広告に左右されず、自分らしいブランド品を見つけられます。<br />
          新たなお気に入りを発見しよう！</p>
        </motion.div>


      </div>
)}