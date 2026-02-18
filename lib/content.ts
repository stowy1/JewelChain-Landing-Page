export interface HeroContent {
  headline: string
  subtext: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  secondaryCtaNote?: string
  variant?: 'default' | 'tight'
}

export interface ProblemCard {
  title: string
  description: string
}

export interface Feature {
  title: string
  description: string
}

export interface Step {
  number: string
  title: string
  description: string
  bullets?: string[]
}

export interface TwoWaysToSource {
  title: string
  left: { title: string; description: string }
  right: { title: string; description: string }
}

export interface Outcome {
  text: string
}

export const designerContent = {
  hero: {
    headline: 'Production infrastructure for scaling jewellery brands.',
    subtext: 'Source verified manufacturers. Compare structured quotes. Scale without operational friction.',
    primaryCta: { text: 'Join as Brand', href: 'https://app.jewelchain.net?utm_source=hero&utm_medium=cta' },
    variant: 'default' as const,
  },
  vsl: {
    title: 'See How Jewel Chain Works for Brands',
    subtitle: 'A walkthrough of how brands source from verified manufacturers, compare structured quotes, and manage production end to end.',
    primaryCta: { text: 'Join as Brand', href: 'https://app.jewelchain.net?utm_source=vsl&utm_medium=cta' },
  },
  problems: {
    title: 'The problem',
    subtitle: 'Most brands struggle with production at scale.',
    problems: [
      {
        title: 'Sourcing chaos',
        description: 'Finding reliable manufacturers means endless emails, inconsistent quotes, and no pricing transparency.',
      },
      {
        title: 'Quote chaos',
        description: 'Every project means endless back-and-forth. No structure, no way to compare like-for-like, no control over what you pay.',
      },
      {
        title: 'Pricing opacity',
        description: 'You don\'t know if you\'re getting fair pricing. No benchmarks, no structure, no way to compare.',
      },
      {
        title: 'Scaling bottlenecks',
        description: 'Production becomes a bottleneck as you grow. Manual processes don\'t scale with your brand.',
      },
    ] as ProblemCard[],
  },
  features: [
    {
      title: 'Structured RFQs',
      description: 'Send detailed requests with specs, quantities, and requirements. Get consistent, comparable quotes.',
    },
    {
      title: 'Pricing transparency',
      description: 'See clear pricing and breakdowns. Know what you\'re paying for and why.',
    },
    {
      title: 'Manufacturer matching',
      description: 'Get matched with manufacturers who specialize in your product type and scale.',
    },
    {
      title: 'Quote management',
      description: 'Compare quotes side-by-side, version control, and full audit trail of every decision.',
    },
    {
      title: 'Order tracking',
      description: 'Centralized order management with status updates, delivery tracking, and communication threads.',
    },
    {
      title: 'Cost predictability',
      description: 'Set clear pricing expectations. Keep your costs predictable across every order.',
    },
  ] as Feature[],
  howItWorks: {
    sectionTitle: 'How it works',
    sectionTagline: 'Built for brands scaling beyond manual sourcing.',
    twoWaysToSource: {
      title: 'Two Ways to Source',
      left: {
        title: 'Shop Structured Catalogues',
        description: 'Buy directly from verified manufacturer catalogues with clear pricing tiers.',
      },
      right: {
        title: 'Request Custom Production',
        description: 'Submit structured RFQs for bespoke designs through the Design Studio.',
      },
    },
    steps: [
      {
        number: '01',
        title: 'Create Your Brand Profile',
        description: 'Define how your brand produces.',
        bullets: [
          'Product categories & SKUs',
          'Target retail positioning',
          'Preferred metals & stones',
          'Quantity ranges',
          'Timeline expectations',
        ],
      },
      {
        number: '02',
        title: 'Match With Verified Manufacturers',
        description: 'Get matched based on capability and scale alignment. Manufacturers are filtered by:',
        bullets: [
          'Product specialization',
          'MOQ compatibility',
          'Production capacity',
          'Lead times',
          'Export capability',
        ],
      },
      {
        number: '03',
        title: 'Receive Structured Quotes',
        description: 'Receive structured quotes with clear pricing based on current market rates. Compare side-by-side including:',
        bullets: [
          'Material costs',
          'Labour components',
          'Quantity tiers',
          'Lead times',
        ],
      },
      {
        number: '04',
        title: 'Track Production & Shipping',
        description: 'Monitor every order in real time.',
        bullets: [
          'Production milestone tracking',
          'Centralised communication threads',
          'Live shipment tracking',
          'Delivery confirmation',
        ],
      },
      {
        number: '05',
        title: 'Analyse Performance',
        description: 'Understand your production performance.',
        bullets: [
          'Cost trends per SKU',
          'Supplier reliability',
          'Order consistency',
          'Reorder analytics',
        ],
      },
      {
        number: '06',
        title: 'Access Industry Insights',
        description: 'Stay competitive with production intelligence.',
        bullets: [
          'Metal price trend overlays',
          'Category-level benchmarks',
          'Production cost trends',
          'Regional sourcing insights',
        ],
      },
    ] as Step[],
  },
  cta: {
    headline: 'Built for brands that need production control.',
    cta: { text: 'Join as Brand', href: 'https://app.jewelchain.net?utm_source=final_cta&utm_medium=cta' },
  },
}

export const manufacturerContent = {
  hero: {
    headline: 'The Operating System for Modern Jewellery Manufacturers.',
    subtext: 'Enforce pricing logic. Eliminate manual quoting. Attract structured demand.',
    primaryCta: { text: 'Join Founding 50', href: 'https://app.jewelchain.net?utm_source=hero&utm_medium=cta' },
    secondaryCtaNote: 'Limited to 50 manufacturers before public rollout.',
    variant: 'tight' as const,
  },
  trustStrip: {
    text: 'Launching at Hong Kong Jewellery Fair 2026 · Early access limited to 50 partners',
  },
  vsl: {
    title: 'See How Jewel Chain Works for Manufacturers',
    subtitle: 'A direct walkthrough of the pricing infrastructure, quoting logic, and demand pipeline.',
    primaryCta: { text: 'Join Founding 50', href: 'https://app.jewelchain.net?utm_source=vsl&utm_medium=cta' },
    secondaryCtaNote: 'Limited to 50 manufacturers before public rollout.',
  },
  problems: {
    title: 'The problem',
    subtitle: 'Most manufacturers are quoting manually — and compressing their own margins.',
    problems: [
      {
        title: 'Manual quoting chaos',
        description: 'Every RFQ requires manual calculation, email threads, and rework. No structure, no efficiency.',
      },
      {
        title: 'Race-to-the-bottom pricing',
        description: 'Unstructured RFQs lead to price compression. You compete on price alone, not value or capability.',
      },
      {
        title: 'Unstructured inbound requests',
        description: 'Inbound requests come in all formats. No standardization means more manual work and missed opportunities.',
      },
      {
        title: 'No pricing control',
        description: 'Inconsistent pricing across projects. No way to enforce minimum margins or pricing floors.',
      },
    ] as ProblemCard[],
  },
  features: [
    {
      title: 'Pricing logic engine',
      description: 'Define minimum margins per metal, karat and complexity — automatically enforced.',
    },
    {
      title: 'Structured RFQs',
      description: 'Structured RFQs and templated responses. Less manual rework, consistent output.',
    },
    {
      title: 'Margin protection',
      description: 'Pricing floors and conditions enforced so margins stay predictable across every quote.',
    },
    {
      title: 'Centralized management',
      description: 'Centralised threads, clear specs, versioned quotes. One place, full audit trail.',
    },
    {
      title: 'Qualified lead matching',
      description: 'Coming Soon — Qualified leads matched to your capabilities.',
    },
  ] as Feature[],
  howItWorks: {
    steps: [
      {
        number: '1',
        title: 'Create Profile',
        description: 'Set up your manufacturer profile with capabilities, specializations, and capacity.',
      },
      {
        number: '2',
        title: 'Input Pricing Logic',
        description: 'Define your pricing rules, minimum margins, and conditions. The system enforces them automatically.',
      },
      {
        number: '3',
        title: 'Upload Your Catalogue',
        description: 'Import products in bulk via CSV or PDF. JewelChain parses your files and builds your catalogue automatically. Brands browse and quote directly from it.',
      },
      {
        number: '4',
        title: 'Receive Structured RFQs',
        description: 'Get matched with qualified RFQs that match your capabilities. All specs are structured and clear.',
      },
      {
        number: '5',
        title: 'Quote With Control',
        description: 'Generate quotes quickly with your pricing logic enforced. Maintain margins, reduce manual work.',
      },
    ] as Step[],
  },
  outcomes: {
    title: 'Manufacturers using structured pricing systems typically see:',
    outcomes: [
      { text: 'Reduced quote turnaround time' },
      { text: 'Improved pricing consistency' },
      { text: 'Higher margin retention' },
    ] as Outcome[],
  },
  cta: {
    headline: 'Built for manufacturers who intend to scale.',
    cta: { text: 'Join Founding 50', href: 'https://app.jewelchain.net?utm_source=final_cta&utm_medium=cta' },
  },
}
