import { useEffect, useState } from 'react';

export const useHeaderScroll = (activePoint: number): boolean => {
    const [isHeaderActive, setIsHeaderActive] = useState<boolean>(false);

    useEffect(() => {
        const scrollWindow = () => {
            const scroll = window.scrollY;
            if (scroll >= activePoint) {
                setIsHeaderActive(true);
            } else {
                setIsHeaderActive(false);
            }
        };

        window.addEventListener('scroll', scrollWindow);

        return () => {
            window.removeEventListener('scroll', scrollWindow);
        };
    }, [activePoint]);

    return isHeaderActive;
};