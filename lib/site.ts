/**
 * Central content & link config for Lotus Legacy.
 * Update copy, links, and contact info here — components read from this file.
 */

export const site = {
  name: "Lotus Legacy",
  tagline: "TikTok LIVE Creator Management",
  description:
    "Lotus Legacy coaches and supports TikTok LIVE creators with strategy, community, and growth — whether you're just starting or ready to scale.",
  copyrightYear: 2026,
  /** Scroll target for in-page Apply CTAs in the nav */
  applySectionId: "#apply",
  /** Replace with your real application form URL */
  applyUrl: "https://example.com/lotus-legacy-apply",
  email: "hello@lotuslegacy.com", // Replace with real contact email
  social: {
    tiktok: "https://www.tiktok.com/@lotuslegacy", // Placeholder
    instagram: "https://www.instagram.com/lotuslegacy", // Placeholder
  },
} as const;

export const navLinks = [
  { label: "Why Us", href: "#why" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#onboarding" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  brand: "Lotus Legacy",
  headline: "Build a lasting career on TikTok LIVE",
  supporting:
    "We coach creators from first stream to consistent earnings — with strategy, support, and a community that grows with you.",
  cta: "Apply Now",
  secondaryCta: "See how it works",
  secondaryHref: "#expect",
} as const;

export const noExperience = {
  id: "no-experience",
  eyebrow: "Open to everyone",
  title: "No experience needed",
  supporting:
    "You don’t need a massive following or years of streaming under your belt. If you’re ready to show up and learn, we’ll help you build from there.",
  points: [
    {
      title: "Starting from zero is fine",
      body: "Many of our creators went LIVE for the first time after joining. We meet you where you are.",
    },
    {
      title: "Follower count isn’t everything",
      body: "LIVE rewards consistency, personality, and strategy — not just how many people follow you on day one.",
    },
    {
      title: "We teach the craft",
      body: "From stream setup to engagement habits, you’ll learn a clear process instead of guessing alone.",
    },
  ],
} as const;

export const whatToExpect = {
  id: "expect",
  eyebrow: "The path ahead",
  title: "What to expect as a TikTok LIVE creator",
  supporting:
    "Going LIVE is more than turning on the camera. Here’s a clear look at what the journey involves — and how we support each part.",
  steps: [
    {
      label: "01",
      title: "Show up consistently",
      body: "Regular streams help the algorithm recognize you and give viewers a reason to come back.",
    },
    {
      label: "02",
      title: "Engage like a host",
      body: "Great LIVEs feel like conversations. You’ll learn how to welcome viewers, hold energy, and build loyalty.",
    },
    {
      label: "03",
      title: "Grow earnings with intention",
      body: "Gifts, battles, and goals make more sense with a plan. We help you understand what drives results.",
    },
    {
      label: "04",
      title: "Protect your account",
      body: "Guidelines, safety, and recovery support matter. You’ll never navigate account issues alone.",
    },
  ],
} as const;

export const whyLotus = {
  id: "why",
  eyebrow: "The difference",
  title: "Why Lotus Legacy?",
  supporting:
    "Streaming alone means figuring everything out the hard way. With us, you get structure, coaching, and a network built for LIVE creators.",
  alone: {
    title: "Streaming alone",
    items: [
      "Hours online with no clear strategy",
      "Guessing why some streams pop and others don’t",
      "Account issues with nowhere to escalate",
      "No feedback loop or growth plan",
      "Learning in isolation",
    ],
  },
  withUs: {
    title: "With Lotus Legacy",
    items: [
      "A plan tailored to your style and goals",
      "1-on-1 coaching and stream feedback",
      "Support when account issues hit",
      "Clear next steps after every review",
      "A community growing alongside you",
    ],
  },
  differentiators: [
    {
      title: "Creator-first coaching",
      body: "We adapt strategy to your personality — not a one-size-fits-all script.",
    },
    {
      title: "Aligned incentives",
      body: "Your growth is the goal. We invest in support that helps you earn more consistently.",
    },
    {
      title: "Real community",
      body: "Co-hosts, peer learning, and events so you’re never building in a vacuum.",
    },
  ],
} as const;

export const benefits = {
  id: "benefits",
  eyebrow: "What’s included",
  title: "Agency benefits",
  supporting:
    "Everything you need to grow on TikTok LIVE — coaching, support, community, and rewards for showing up.",
  items: [
    {
      title: "Personalized coaching",
      body: "1-on-1 guidance, stream reviews, and a game plan that fits how you create.",
    },
    {
      title: "LIVE support",
      body: "Help with setup, engagement, battles, and the moments that make or break a stream.",
    },
    {
      title: "Creator community",
      body: "Connect with peers, co-host, and learn from creators who’ve been where you are.",
    },
    {
      title: "Events & campaigns",
      body: "Access exclusive challenges, campaigns, and community events beyond the daily stream.",
    },
    {
      title: "Performance bonuses",
      body: "Rewards for consistency and growth — so strong habits pay off beyond the LIVE itself.",
    },
  ],
} as const;

export const onboarding = {
  id: "onboarding",
  eyebrow: "Getting started",
  title: "Onboarding process",
  supporting:
    "From application to your first coached streams — a simple path designed to get you live with confidence.",
  steps: [
    {
      step: "01",
      title: "Apply",
      body: "Share a bit about yourself and your goals. No huge following required — just honesty and readiness.",
    },
    {
      step: "02",
      title: "Connect",
      body: "We’ll review your application, hop on a quick intro, and make sure Lotus Legacy is the right fit.",
    },
    {
      step: "03",
      title: "Onboard",
      body: "Get access to coaching, community channels, and a starter plan for your first streams.",
    },
    {
      step: "04",
      title: "Grow",
      body: "Stream with support, review progress, and refine your strategy as your audience and earnings build.",
    },
  ],
} as const;

export const apply = {
  id: "apply",
  title: "Your next chapter starts here",
  supporting:
    "Join Lotus Legacy and get coaching, LIVE support, and a creator community — built for people ready to take TikTok LIVE seriously.",
  cta: "Apply Now",
  note: "Applications typically reviewed within a few days.",
  perks: [
    "1-on-1 LIVE coaching",
    "Stream & strategy feedback",
    "Creator community access",
    "Events & bonus opportunities",
  ],
} as const;

export const faq = {
  id: "faq",
  eyebrow: "Questions",
  title: "FAQ & contact",
  supporting:
    "Straight answers to what creators ask most. Still unsure? Reach out — we’re happy to help.",
  items: [
    {
      question: "Do I need a large following to apply?",
      answer:
        "No. We work with creators at every stage — including people who have never gone LIVE. What matters most is consistency and a willingness to learn.",
    },
    {
      question: "Is there a cost to join?",
      answer:
        "Reach out during your application for current program details. We’re transparent about how support works and what you can expect before you commit.",
    },
    {
      question: "How is Lotus Legacy different from other agencies?",
      answer:
        "We focus on real coaching, ongoing feedback, and community — not signing creators and disappearing. You’ll have clear support and a path forward at every stage.",
    },
    {
      question: "How long does onboarding take?",
      answer:
        "Most creators move from accepted application to active streaming support within days, depending on scheduling and account readiness.",
    },
    {
      question: "Can I still be myself on stream?",
      answer:
        "Absolutely. Our coaching is built around your natural style. We help you refine what already works — we don’t replace your personality with a script.",
    },
  ],
  contact: {
    title: "Get in touch",
    body: "Applying or just have a question? Send us a note and we’ll get back to you shortly.",
    emailLabel: "Email us",
  },
} as const;
