import React from 'react';

// Used for the pure "statement" slides: hook, problem, gap, turn, why-now.
// Pass size="xl" for the cold-open hook slide to make it read even bigger.
const TitleSlide = ({ eyebrow, headline, subtext, size = 'lg' }) => (
    <div className="mx-auto max-w-5xl px-4 text-center">
        {eyebrow && (
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue md:text-sm">
                {eyebrow}
            </p>
        )}
        <h1
            className={`font-bold leading-[1.08] tracking-tight text-brand-black ${size === 'xl'
                    ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
                    : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
                }`}
        >
            {headline}
        </h1>
        {subtext && (
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-500 md:text-2xl">
                {subtext}
            </p>
        )}
    </div>
);

export default TitleSlide;
