// ============================================================================
// ROADMAP VSL: ALL SLIDE COPY LIVES HERE
// Edit the text below to change what's on screen. Anything wrapped in
// [BRACKETS] is a placeholder. Swap it for the real thing before you record.
// Layout/animation code lives in ./SlideDeck.jsx and ./slides/*.jsx. You
// shouldn't need to touch those files just to change words.
// ============================================================================

// The 4 phases: single source of truth, used on both the roadmap overview
// slide (6) and the individual phase slides (7-10).
export const phases = [
  {
    number: '01',
    name: '[PHASE 1: POSITIONING]',
    outcome:
      "Your resume, your story, and your online presence stop blending in. They start doing the selling before you ever say a word.",
    insight:
      "Most people fix their resume last. It should be first, because everything downstream depends on how you're positioned before anyone reads a single line: the calls, the interviews, the offer.",
  },
  {
    number: '02',
    name: '[PHASE 2: PIPELINE]',
    outcome:
      "You stop applying into the void and start having real conversations with real decision-makers, on repeat, not by accident.",
    insight:
      "Most people think the job board is where the game gets played. It's not. By the time a role is posted, it's often already spoken for.",
  },
  {
    number: '03',
    name: '[PHASE 3: THE ROOM]',
    outcome:
      "You walk into interviews sounding like someone already doing the job, not someone auditioning for it.",
    insight:
      "Most people prepare answers. The ones who win prepare a story. Anyone who's ever hired someone can tell the difference in the first two minutes.",
  },
  {
    number: '04',
    name: '[PHASE 4: THE CLOSE]',
    outcome:
      "You negotiate from leverage instead of gratitude, and stop leaving real money on the table over the next few years without even realizing it.",
    insight:
      "Most people take the first number because they're scared of losing the offer. Almost nobody loses an offer for asking correctly.",
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
      "The people getting the offers, the fast promotions, the callbacks: they're not smarter than you. They're not working harder. They just understood something about how this actually works that nobody ever sat down and explained. Once I saw it, I couldn't unsee it. So I built a system around it.",
  },
  whyNow: {
    eyebrow: 'WHY THIS MATTERS AT 20-25, SPECIFICALLY',
    headline: "The gap between 22 and 32 isn't ten years. It's compounding.",
    subtext:
      "[SPECIFIC NUMBER] figured out at 22 is worth more than [SPECIFIC NUMBER] figured out at 32, not because of the money, but because of what compounds after it: the title, the network, the trajectory. Waiting doesn't feel expensive. That's exactly what makes it expensive.",
  },
};

export const credibility = {
  eyebrow: "OKAY, HERE'S WHY YOU SHOULD LISTEN TO ME",
  headline:
    "I'm not telling you this to impress you. I'm telling you because it's proof this isn't theory.",
  points: [
    '20 years old. Finished a 4-year degree in 3, with honors, top of my major, [SPECIFIC GPA].',
    "Now doing a Master's in Computer Science (AI) at Georgia Tech, while working full-time in national security tech.",
    '6+ roles and internships in under 3 years: cybersecurity, cloud engineering, AI security, federal contracting, technical program management.',
    '40+ certifications across AWS, Microsoft, Google, Cisco, CompTIA, and Palantir.',
    'Multiple job offers before I turned 20, and negotiated well above the posted range on more than one.',
  ],
  footer: "Not the point of this. Just the receipts.",
};

export const roadmapOverview = {
  eyebrow: "SO HERE'S THE SHAPE OF IT",
  headline: 'Four phases. One system. A completely different trajectory.',
  subtext:
    "This isn't a resume workshop or a LinkedIn tips thread. It's the whole path, in order.",
};

export const proof = {
  eyebrow: "THIS ISN'T THEORY",
  headline: "It's repeatable. Here's what it's looked like for other people.",
  testimonials: [
    { quote: '[TESTIMONIAL QUOTE 1]', name: '[NAME]', result: '[RESULT, e.g. landed offer at X in Y weeks]' },
    { quote: '[TESTIMONIAL QUOTE 2]', name: '[NAME]', result: '[RESULT]' },
    { quote: '[TESTIMONIAL QUOTE 3]', name: '[NAME]', result: '[RESULT]' },
  ],
  stats: [
    { value: '[RESULT STAT]', label: '[STAT LABEL, e.g. avg. increase in offer $]' },
    { value: '[RESULT STAT]', label: '[STAT LABEL]' },
    { value: '[RESULT STAT]', label: '[STAT LABEL]' },
  ],
};

export const offer = {
  eyebrow: "HERE'S WHAT THIS ACTUALLY IS",
  name: '[PROGRAM NAME]',
  headline:
    "A [PROGRAM LENGTH] system that walks you through exactly how to position, pipeline, prepare, and negotiate your way to offers that actually match what you're capable of.",
  included: [
    "[WHAT'S INCLUDED: ITEM 1]",
    "[WHAT'S INCLUDED: ITEM 2]",
    "[WHAT'S INCLUDED: ITEM 3]",
    "[WHAT'S INCLUDED: ITEM 4]",
  ],
  transformation: '[ONE-LINE TRANSFORMATION PROMISE]',
};

export const cta = {
  eyebrow: "HERE'S EXACTLY WHAT TO DO NEXT",
  headline: 'Click below and book your free strategy call.',
  subtext:
    "We'll get on a call, look at where you actually are, and figure out if this is a fit. No pitch, no pressure.",
  buttonLabel: 'Book Your Free Strategy Call',
  buttonHref: '/schedule',
};
