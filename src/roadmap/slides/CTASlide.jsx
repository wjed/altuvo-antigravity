import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASlide = ({ eyebrow, headline, subtext, buttonLabel, buttonHref }) => (
    <div className="mx-auto max-w-2xl px-4 text-center">
        {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-roadmap-gold md:text-sm">
                {eyebrow}
            </p>
        )}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-roadmap-ink sm:text-4xl md:text-5xl">
            {headline}
        </h1>
        {subtext && <p className="mt-4 text-base text-roadmap-inkMuted md:text-lg">{subtext}</p>}

        <Link
            to={buttonHref}
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-roadmap-gold px-10 py-5 text-lg font-bold uppercase tracking-wide text-roadmap-bg shadow-lg shadow-roadmap-gold/20 transition hover:bg-[#E8C787]"
        >
            {buttonLabel}
            <ArrowRight size={20} />
        </Link>
    </div>
);

export default CTASlide;
