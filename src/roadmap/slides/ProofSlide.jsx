import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ProofSlide = ({ eyebrow, headline, pillars }) => (
    <div className="mx-auto w-full max-w-5xl px-4 text-center">
        {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-roadmap-gold md:text-sm">
                {eyebrow}
            </p>
        )}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-roadmap-ink sm:text-4xl md:text-5xl">
            {headline}
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {pillars.map((p, i) => (
                <div key={i} className="rounded-2xl border border-roadmap-line bg-roadmap-bgSoft p-6 text-left">
                    <ShieldCheck className="h-5 w-5 text-roadmap-gold" />
                    <p className="mt-4 text-base font-bold text-roadmap-ink">{p.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-roadmap-inkMuted">{p.body}</p>
                </div>
            ))}
        </div>
    </div>
);

export default ProofSlide;
