import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CredibilitySlide = ({ eyebrow, headline, points, footer }) => (
    <div className="mx-auto max-w-3xl px-4 text-center">
        {eyebrow && (
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue md:text-sm">
                {eyebrow}
            </p>
        )}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-brand-black sm:text-4xl md:text-5xl">
            {headline}
        </h1>
        <ul className="mx-auto mt-10 max-w-xl space-y-4 text-left">
            {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-gray-700 sm:text-lg">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-blue" />
                    <span>{point}</span>
                </li>
            ))}
        </ul>
        {footer && <p className="mt-8 text-sm italic text-gray-400">{footer}</p>}
    </div>
);

export default CredibilitySlide;
