import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Disable browser's default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const scrollToTop = () => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        // Immediate scroll
        scrollToTop();

        // Delayed scroll to override browser restoration
        const timer = setTimeout(() => {
            scrollToTop();
        }, 10);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
