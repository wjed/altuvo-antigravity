import React from 'react';
import { ArrowDown } from 'lucide-react';

// No button here on purpose: this slide is the closing beat of the embedded
// VSL itself, and the real "book a call" button lives on the page below the
// video. The arrow just points viewers down to it.
const CTASlide = ({ eyebrow, headline, subtext }) => (
    <div className="mx-auto max-w-2xl px-4 text-center">
        {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue md:text-sm">
                {eyebrow}
            </p>
        )}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-brand-black sm:text-4xl md:text-5xl">
            {headline}
        </h1>
        {subtext && <p className="mt-4 text-base text-gray-500 md:text-lg">{subtext}</p>}

        <ArrowDown className="mx-auto mt-10 h-10 w-10 animate-bounce text-brand-blue" />
    </div>
);

export default CTASlide;
