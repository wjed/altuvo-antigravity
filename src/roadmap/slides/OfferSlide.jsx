import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const OfferSlide = ({ eyebrow, name, headline, included, transformation }) => (
    <div className="mx-auto max-w-3xl px-4 text-center">
        {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-roadmap-gold md:text-sm">
                {eyebrow}
            </p>
        )}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-roadmap-gold sm:text-4xl md:text-5xl">
            {name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-roadmap-ink/90 md:text-xl">
            {headline}
        </p>

        <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
            {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-roadmap-inkMuted md:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-roadmap-gold" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-roadmap-gold/30 bg-roadmap-gold/[0.06] p-5">
            <p className="text-base font-semibold text-roadmap-ink">{transformation}</p>
        </div>
    </div>
);

export default OfferSlide;
