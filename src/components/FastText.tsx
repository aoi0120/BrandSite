import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const FastText = ({onComplete}: {onComplete: () => void }) => {
    const [text, setText] = useState<string>('Find what you like.');

    useEffect(() => {
        const delay = 1300;
        const timer = setTimeout(() => {
            setText('好きを見つけよう');
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait"> {/* mode="wait"を指定することで、アニメーションが終わるまで次のアニメーションを待つ */}
            <motion.div
                key={text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} //切り替え時のアニメーション
                transition={{ duration: 0.5, delay: 0.8 }}
                onAnimationComplete={onComplete}
            >
                {text}
            </motion.div>
        </AnimatePresence>
    )





}