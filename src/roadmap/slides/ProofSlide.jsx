import React from 'react';

const ProofSlide = ({ eyebrow, headline, testimonials, stats }) => (
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
            {testimonials.map((t, i) => (
                <div key={i} className="rounded-2xl border border-roadmap-line bg-roadmap-bgSoft p-5 text-left">
                    <p className="text-sm italic text-roadmap-ink/90">&ldquo;{t.quote}&rdquo;</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-roadmap-gold">
                        {t.name}
                    </p>
                    <p className="text-xs text-roadmap-inkMuted">{t.result}</p>
                </div>
            ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-roadmap-line/60 bg-roadmap-bgSoft/60 p-5">
                    <p className="text-3xl font-bold text-roadmap-ink">{s.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-roadmap-inkMuted">{s.label}</p>
                </div>
            ))}
        </div>
    </div>
);

export default ProofSlide;
