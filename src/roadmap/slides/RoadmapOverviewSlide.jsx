import React from 'react';

const RoadmapOverviewSlide = ({ eyebrow, headline, subtext, phases }) => (
    <div className="mx-auto w-full max-w-5xl px-4 text-center">
        {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue md:text-sm">
                {eyebrow}
            </p>
        )}
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-brand-black sm:text-4xl md:text-5xl">
            {headline}
        </h1>
        {subtext && <p className="mt-4 text-base text-gray-500 md:text-lg">{subtext}</p>}

        <div className="relative mt-12">
            <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent lg:block" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {phases.map((phase) => (
                    <div
                        key={phase.number}
                        className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left transition hover:border-brand-blue/40"
                    >
                        <span className="text-sm font-semibold text-brand-blue">{phase.number}</span>
                        <h3 className="mt-2 text-lg font-bold text-brand-black">{phase.name}</h3>
                        <p className="mt-3 text-sm text-gray-500">{phase.outcome}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default RoadmapOverviewSlide;
