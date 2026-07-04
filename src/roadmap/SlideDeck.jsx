import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Full-screen click/tap/swipe/arrow-key slide deck engine.
// Tap or click the left ~30% of the screen to go back, the rest to advance.
// Same pattern as Instagram/TikTok stories. Real links/buttons inside a
// slide (e.g. the CTA button) are excluded from that background handler so
// they still work normally. Light theme, matches the rest of the site
// (white background, brand-blue accent) instead of a standalone palette.
const SlideDeck = ({ slides, initialIndex = 0 }) => {
    const total = slides.length;
    const clampedInitial = Math.min(Math.max(initialIndex, 0), total - 1);
    const [index, setIndex] = useState(clampedInitial);
    const touchStartX = useRef(null);

    const goNext = useCallback(() => {
        setIndex((i) => Math.min(i + 1, total - 1));
    }, [total]);

    const goPrev = useCallback(() => {
        setIndex((i) => Math.max(i - 1, 0));
    }, []);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
                e.preventDefault();
                goNext();
            } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
                e.preventDefault();
                goPrev();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [goNext, goPrev]);

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) {
            if (delta < 0) goNext();
            else goPrev();
        }
        touchStartX.current = null;
    };

    const onBackgroundClick = (e) => {
        if (e.target.closest('a, button, input, textarea, select')) return;
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - left;
        if (clickX < width * 0.3) goPrev();
        else goNext();
    };

    return (
        <div
            className="relative h-[100dvh] w-full overflow-hidden bg-white select-none"
            onClick={onBackgroundClick}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* progress bar */}
            <div className="absolute top-0 left-0 right-0 z-30 flex gap-1 px-4 pt-4 sm:px-8 sm:pt-6">
                {slides.map((_, i) => (
                    <div key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-gray-200">
                        <div
                            className="h-full rounded-full bg-brand-blue transition-all duration-300"
                            style={{ width: i <= index ? '100%' : '0%' }}
                        />
                    </div>
                ))}
            </div>

            {/* exit link, subtle by design so it doesn't show up loud on a recording */}
            <a
                href="/"
                className="absolute left-4 top-8 z-30 text-[10px] uppercase tracking-[0.2em] text-gray-400 transition hover:text-brand-blue sm:left-8 sm:top-10"
            >
                Exit
            </a>

            {/* slide counter */}
            <div className="absolute bottom-6 right-6 z-30 text-xs tracking-widest text-gray-400 sm:bottom-8 sm:right-8">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </div>

            {/* slide content, remounts on index change to replay the enter animation */}
            <div
                key={index}
                className="roadmap-slide-enter relative z-10 flex h-full w-full items-center justify-center px-6 py-24 sm:px-12"
            >
                {slides[index]}
            </div>

            {/* nav arrows */}
            <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3 sm:bottom-8">
                <button
                    onClick={goPrev}
                    disabled={index === 0}
                    aria-label="Previous slide"
                    className="rounded-full border border-gray-200 bg-white p-2 text-gray-500 shadow-sm transition hover:border-brand-blue/40 hover:text-brand-blue disabled:opacity-30"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={goNext}
                    disabled={index === total - 1}
                    aria-label="Next slide"
                    className="rounded-full border border-gray-200 bg-white p-2 text-gray-500 shadow-sm transition hover:border-brand-blue/40 hover:text-brand-blue disabled:opacity-30"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default SlideDeck;
