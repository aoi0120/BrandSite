import { motion } from 'framer-motion'
import { FastText } from './FastText'
import { useEffect, useRef, useState } from 'react';

export const FastView = () => {
  const timerRef = useRef<number | null>(null);
  const [isVisible , setIsVisible] = useState<boolean>(false)
  const [isTextComplete, setIsTextComplete] = useState<boolean>(false)

  useEffect(() => {
    //ブラウザのスクロール復元機能を無効化
    if ('scrollRestoration' in window.history)
      window.history.scrollRestoration = 'manual';
    //上部まで移動
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  useEffect(() => {
    //スクロール一時的に停止
    // document.body.style.overflow = 'hidden';

    //4秒後にスクロール再開
    timerRef.current = window.setTimeout(() => {
      document.body.style.overflow = "auto";
    },4000);

    //クリーンアップ:タイマー時間をリセット
    return () => {
      if (timerRef.current !== null ) clearTimeout(timerRef.current)
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true),3000)

    return () => clearTimeout(timer)
  },[])

  return (
    <div
      className='z-0 top-0 relative w-screen h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url(/mainBlack.png)' }}
    >
      <h1 className=' text-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-[100px] text-neutral-200 font-Garamond'>
        <FastText onComplete={() => setIsTextComplete(true)} />
      </h1>

      {isTextComplete && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        >
        <p className='text-center absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-[78%] text-[40px] w-[1300px] text-neutral-200 bg-opacity-80 bg-slate-900 p-4 rounded-md'>
          このサイトは、人気や広告に左右されず、自分らしいブランド品を見つけられます。<br />
          新たなお気に入りを発見しよう！
        </p>
      </motion.div>
      )}
    </div>
  );
};
