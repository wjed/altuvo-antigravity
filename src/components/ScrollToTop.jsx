import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    import { useLayoutEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useLayoutEffect(() => {
            // Disable browser's default scroll restoration
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }

            // Immediate scroll
            window.scrollTo(0, 0);

            // Delayed scroll to override browser restoration
            const timer = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);

            return () => clearTimeout(timer);
        }, [pathname]);

        return null;
    };

    export default ScrollToTop;
