import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNav = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTopOnNav;
