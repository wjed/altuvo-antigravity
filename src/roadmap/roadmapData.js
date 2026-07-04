// ============================================================================
// ROADMAP VSL: ALL SLIDE COPY LIVES HERE
// Edit the text below to change what's on screen. Layout/animation code
// lives in ./SlideDeck.jsx and ./slides/*.jsx. You shouldn't need to touch
// those files just to change words.
// ============================================================================

// The Altuvo Method: 4 phases, single source of truth, used on both the
// roadmap overview slide (6) and the individual phase slides (7-10).
export const phases = [
  {
    number: '01',
    name: 'THE AUDIT',
    outcome:
      "You find out exactly where you're actually losing: the blind spots in your resume, your story, and your strategy that you can't see because you're too close to it.",
    insight:
      "Most people try to fix things before they know what's actually broken. You can't fix a gap you can't see, so this comes first, always.",
  },
  {
    number: '02',
    name: 'THE REBUILD',
    outcome:
      "Your resume, your story, and your online presence get rebuilt around what actually gets you picked, not what you assumed mattered.",
    insight:
      "Most people polish what they already have. We rebuild the parts that were never built right in the first place.",
  },
  {
    number: '03',
    name: 'THE PIPELINE',
    outcome:
      "You stop applying into the void and start getting in front of real decision-makers, on repeat, not by accident.",
    insight:
      "Most people think the job board is where the game gets played. It's not. By the time a role is posted, it's often already spoken for.",
  },
  {
    number: '04',
    name: 'THE CLOSE',
    outcome:
      "You walk into interviews like you're already doing the job, and negotiate the offer like the leverage was always yours.",
    insight:
      "Most people prepare answers and take the first number. The ones who win prepare a story, and almost nobody loses an offer for asking correctly.",
  },
];

// Simple statement slides: hook, problem, gap, turn, why-now.
export const slideContent = {
  hook: {
    eyebrow: null,
    headline: "You're not behind. You just don't know the rules yet.",
    subtext: null,
  },
  problem: {
    eyebrow: 'BE HONEST WITH YOURSELF FOR A SECOND',
    headline:
      'You did the internships. The GPA. The certifications everyone told you to collect.',
    subtext:
      "And you still open LinkedIn and feel like you're losing a race nobody explained the rules of.",
  },
  gap: {
    eyebrow: "HERE'S THE PART NO ONE SAYS OUT LOUD",
    headline: 'Working hard was never the problem.',
    subtext:
      "Most people are optimizing the wrong things, because nobody ever taught them what actually moves a hiring decision, a negotiation, or a career trajectory. Effort isn't the bottleneck. Information is.",
  },
  turn: {
    eyebrow: "HERE'S WHERE IT CHANGED",
    headline: 'Nobody told me this, and it changed everything.',
    subtext:
      "The people getting the offers, the fast promotions, the callbacks: they're not smarter than you. They're not working harder. They just understood something about how this actually works that nobody ever sat down and explained. Once I saw it, I couldn't unsee it. So I built a system around it: the Altuvo Method.",
  },
  whyNow: {
    eyebrow: 'WHY THIS MATTERS AT 20-25, SPECIFICALLY',
    headline: "The gap between 22 and 32 isn't ten years. It's compounding.",
    subtext:
      "$10K figured out at 22 is worth more than $50K figured out at 32, not because of the money, but because of what compounds after it: the title, the network, the trajectory. Waiting doesn't feel expensive. That's exactly what makes it expensive.",
  },
};

export const credibility = {
  eyebrow: "OKAY, HERE'S WHY YOU SHOULD LISTEN TO ME",
  headline:
    "I'm not telling you this to impress you. I'm telling you because it's proof this isn't theory.",
  points: [
    '20 years old. Finished a 4-year degree in 3, with honors, top of my major, 3.97 GPA.',
    "Now doing a Master's in Computer Science (AI) at Georgia Tech, while working full-time in national security tech.",
    '6+ roles and internships in under 3 years: cybersecurity, cloud engineering, AI security, federal contracting, technical program management.',
    '40+ certifications across AWS, Microsoft, Google, Cisco, CompTIA, and Palantir.',
    'Multiple job offers before I turned 20, and negotiated well above the posted range on more than one.',
  ],
  footer: "Not the point of this. Just the receipts.",
};

export const roadmapOverview = {
  eyebrow: "SO HERE'S THE SHAPE OF IT",
  headline: 'The Altuvo Method: four phases, one system, a completely different trajectory.',
  subtext:
    "This isn't a resume workshop or a LinkedIn tips thread. It's the whole path, in order.",
};

// Proof pillars, not fabricated testimonials. This program is brand new, so
// there's no real client history to quote yet. Faking quotes and results
// from people who don't exist would be exactly the kind of dishonest
// marketing this brand is built to be the opposite of. Once you have real
// student results, swap this slide for actual testimonials.
export const proof = {
  eyebrow: "THIS ISN'T BORROWED THEORY",
  headline: "Here's why this actually works, not just why it sounds good.",
  pillars: [
    {
      title: 'Built From The Inside',
      body: "Not recycled career advice. Built from actually sitting in hiring loops in national security tech, and watching firsthand what separates the offer from the rejection.",
    },
    {
      title: 'Tested On Myself First',
      body: "This is the same process that got me multiple job offers before I turned 20, and let me negotiate well above the posted range on more than one of them.",
    },
    {
      title: 'Built To Be Repeated',
      body: "Not a resume trick or a one-time hack. A process: audit, rebuild, pipeline, close. Anyone willing to do the work can run it.",
    },
  ],
};

export const offer = {
  eyebrow: "HERE'S WHAT THIS ACTUALLY IS",
  name: 'The Altuvo Method',
  headline:
    "An end-to-end coaching program that walks you through exactly how to audit, rebuild, pipeline, and close your way to offers that actually match what you're capable of.",
  included: [
    "A full audit of where you're actually losing right now, not guesses",
    'Your resume, story, and online presence rebuilt around what gets you picked',
    "A repeatable pipeline system, so you're never relying on the job board alone",
    'Interview and negotiation coaching, so you close what you started',
  ],
  transformation: 'Go from applying and hoping to positioned and picked.',
};

export const cta = {
  eyebrow: "HERE'S EXACTLY WHAT TO DO NEXT",
  headline: 'Click below and book your free strategy call.',
  subtext:
    "We'll get on a call, look at where you actually are, and figure out if this is a fit. No pitch, no pressure.",
};
