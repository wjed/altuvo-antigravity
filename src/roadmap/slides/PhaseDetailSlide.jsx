import React from 'react';

const PhaseDetailSlide = ({ phase, total }) => (
    <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue md:text-sm">
            Phase {phase.number} of {String(total).padStart(2, '0')}
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-black sm:text-5xl md:text-6xl">
            {phase.name}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-700 md:text-2xl">
            {phase.outcome}
        </p>
        <div className="mx-auto mt-10 max-w-xl border-t border-gray-200 pt-6">
            <p className="text-sm leading-relaxed text-gray-500 md:text-base">{phase.insight}</p>
        </div>
    </div>
);

export default PhaseDetailSlide;
