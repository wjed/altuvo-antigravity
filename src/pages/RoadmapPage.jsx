import React, { useEffect } from 'react';
import SlideDeck from '../roadmap/SlideDeck';
import TitleSlide from '../roadmap/slides/TitleSlide';
import CredibilitySlide from '../roadmap/slides/CredibilitySlide';
import RoadmapOverviewSlide from '../roadmap/slides/RoadmapOverviewSlide';
import PhaseDetailSlide from '../roadmap/slides/PhaseDetailSlide';
import ProofSlide from '../roadmap/slides/ProofSlide';
import OfferSlide from '../roadmap/slides/OfferSlide';
import CTASlide from '../roadmap/slides/CTASlide';
import {
    phases,
    slideContent,
    credibility,
    roadmapOverview,
    proof,
    offer,
    cta,
} from '../roadmap/roadmapData';

// Not linked from Header/Footer/nav on purpose. This is a VSL screen-share
// deck, only meant to be reached via a direct link. Keeps it out of search
// via a noindex tag injected below.
const RoadmapPage = () => {
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, nofollow';
        document.head.appendChild(meta);

        const prevTitle = document.title;
        document.title = 'Roadmap';

        return () => {
            document.head.removeChild(meta);
            document.title = prevTitle;
        };
    }, []);

    const slides = [
        <TitleSlide key="hook" size="xl" {...slideContent.hook} />,
        <TitleSlide key="problem" {...slideContent.problem} />,
        <TitleSlide key="gap" {...slideContent.gap} />,
        <CredibilitySlide key="credibility" {...credibility} />,
        <TitleSlide key="turn" {...slideContent.turn} />,
        <RoadmapOverviewSlide key="overview" {...roadmapOverview} phases={phases} />,
        ...phases.map((phase, i) => (
            <PhaseDetailSlide key={`phase-${i}`} phase={phase} total={phases.length} />
        )),
        <ProofSlide key="proof" {...proof} />,
        <TitleSlide key="why-now" {...slideContent.whyNow} />,
        <OfferSlide key="offer" {...offer} />,
        <CTASlide key="cta" {...cta} />,
    ];

    // Supports deep-linking to a specific slide, e.g. /roadmap?slide=6
    const initialIndex = Number(new URLSearchParams(window.location.search).get('slide')) - 1 || 0;

    return <SlideDeck slides={slides} initialIndex={initialIndex} />;
};

export default RoadmapPage;
