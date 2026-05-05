// All content for the M14service site.
// Bracketed [TODO ...] strings mark fields that need client confirmation
// before going live — never invent stats, reviews or claims.

export const company = {
  name: "M14service",
  legalName: "M14service",
  // TODO: confirm UK trading entity / Companies House number if registered
  regNr: "[TODO: company number]",
  address: "[TODO: service area / base address]",
  legalAddress: "[TODO: legal address]",
  phone: "+44 7359 494139",
  phoneLandline: "",
  email: "m14service.uk@gmail.com",
  website: "m14service.uk",
  hours: "[TODO: confirm operating hours]",
  bank: "",
  swift: "",
  iban: "",
  instagram: "m14service",
  instagramUrl: "https://instagram.com/m14service",
  youtube: "@M14serviceM",
  youtubeUrl: "https://www.youtube.com/@M14serviceM",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/contact", label: "Contact" },
];

// Six service categories — pulled from M14service's IG marketing
// (their actual visual marketing leans home / office / hotel, so we drop
// the bio's factory/warehouse + high-level lines until they confirm).
export const productCategories = [
  {
    slug: "home",
    title: "Home & apartment",
    sub: "Regular & one-off",
    img: "/images/projects/image1.jpg",
    blurb:
      "Routine home cleaning and one-off resets — kitchens, bathrooms, living spaces, the lot.",
  },
  {
    slug: "office",
    title: "Office & company",
    sub: "Recurring schedules",
    img: "/images/projects/image2.jpg",
    blurb:
      "Daily, weekly or fortnightly office cleans — fitted around your team.",
  },
  {
    slug: "deep-clean",
    title: "Deep clean & disinfection",
    sub: "Top-to-bottom reset",
    img: "/images/projects/image3.jpg",
    blurb:
      "A full reset for kitchens, bathrooms and high-touch areas — disinfection included.",
  },
  {
    slug: "move",
    title: "Move-in / move-out",
    sub: "End-of-tenancy",
    img: "/images/projects/image4.jpg",
    blurb:
      "End-of-tenancy and handover cleans built around inventory checks.",
  },
  {
    slug: "post-reno",
    title: "Post-renovation",
    sub: "After the builders leave",
    img: "/images/projects/image5.jpg",
    blurb:
      "Dust, debris and paint splatter cleared so the space is ready to use.",
  },
  {
    slug: "custom",
    title: "Custom requests",
    sub: "Tell us the job",
    img: "/images/projects/image6.jpg",
    blurb:
      "Hotels, short-lets, holiday rentals or anything else — quote on request.",
  },
];

// Project gallery — six photos from a recent job M14service shared.
// TODO: confirm location/scope with client before publishing.
export const galleryProjects = [
  { src: "/images/projects/image1.jpg", alt: "M14service recent project — view 1" },
  { src: "/images/projects/image2.jpg", alt: "M14service recent project — view 2" },
  { src: "/images/projects/image3.jpg", alt: "M14service recent project — view 3" },
  { src: "/images/projects/image4.jpg", alt: "M14service recent project — view 4" },
  { src: "/images/projects/image5.jpg", alt: "M14service recent project — view 5" },
  { src: "/images/projects/image6.jpg", alt: "M14service recent project — view 6" },
];

export const beforeAfter = {
  before: { src: "/images/before1.jpg", alt: "Before M14service cleaning" },
  after: { src: "/images/after1.jpg", alt: "After M14service cleaning" },
};

export const services = [
  {
    num: "01",
    title: "Carpet cleaning",
    desc: "Deep extraction for carpets and rugs — restoring colour and removing odour.",
  },
  {
    num: "02",
    title: "Hard floor polishing",
    desc: "Stripping, sealing and polishing for stone, vinyl and wooden floors.",
  },
  {
    num: "03",
    title: "Factory & warehouse floors",
    desc: "Industrial floor cleaning for production halls and storage facilities.",
  },
  {
    num: "04",
    title: "Upholstery & fabrics",
    desc: "Sofas, chairs, mattresses and soft furnishings cleaned in place.",
  },
  {
    num: "05",
    title: "High level cleaning",
    desc: "Hard-to-reach surfaces — beams, vents, ducts and ceilings.",
  },
  {
    num: "06",
    title: "Daily cleaning",
    desc: "Recurring office and commercial maintenance cleans on your schedule.",
  },
  {
    num: "07",
    title: "Deep cleaning",
    desc: "Top-to-bottom resets for homes, offices and post-renovation handovers.",
  },
  {
    num: "08",
    title: "Move-in / move-out",
    desc: "End-of-tenancy and handover cleans built around inventory checks.",
  },
];

// TODO: replace with confirmed numbers once client signs off.
export const stats = [
  { n: "[TODO]", l: "Years of experience" },
  { n: "[TODO]", l: "Properties cleaned" },
  { n: "8", l: "Service categories" },
  { n: "[TODO]", l: "Customer satisfaction" },
];

// TODO: swap each `img` for a real M14service work photo dropped into /public/images/projects/.
export const projects = [
  { img: "/images/products/heatpump.jpg", label: "Office daily clean", loc: "[TODO]" },
  { img: "/images/products/boiler.jpg", label: "End-of-tenancy", loc: "[TODO]" },
  { img: "/images/products/stove.jpg", label: "Carpet extraction", loc: "[TODO]" },
  { img: "/images/products/venti.jpg", label: "Warehouse floor", loc: "[TODO]" },
  { img: "/images/products/ac.jpg", label: "Hotel deep clean", loc: "[TODO]" },
  { img: "/images/products/water.jpg", label: "Post-renovation", loc: "[TODO]" },
];

// TODO: replace placeholder bios with real M14service projects + photos in /public/images/cases/.
export const caseStudies = [
  {
    img: "/images/cases/case-1.svg",
    title: "[TODO: Project title — e.g. apartment in Manchester]",
    tag: "Carpet · Upholstery",
    bio:
      "[TODO: short narrative of the job — scope, what we did, outcome. Keep it factual; no invented numbers.]",
    stats: [
      { n: "[TODO]", l: "Floor area" },
      { n: "[TODO]", l: "Time on site" },
    ],
  },
  {
    img: "/images/cases/case-2.svg",
    title: "[TODO: Project title — e.g. office floor in London]",
    tag: "Hard floor · Polishing",
    bio:
      "[TODO: short narrative. Replace before publishing.]",
    stats: [
      { n: "[TODO]", l: "Floor area" },
      { n: "[TODO]", l: "Time on site" },
    ],
  },
  {
    img: "/images/cases/case-3.svg",
    title: "[TODO: Project title — e.g. warehouse in Birmingham]",
    tag: "Factory · Industrial",
    bio:
      "[TODO: short narrative. Replace before publishing.]",
    stats: [
      { n: "[TODO]", l: "Floor area" },
      { n: "[TODO]", l: "Time on site" },
    ],
  },
];

// TODO: replace with real customer reviews. Bracketed names mark placeholders —
// don't ship until M14service supplies actual reviewers' names + permission.
export const reviews = [
  {
    stars: 5,
    text:
      "[TODO: real review #1. Replace before publishing. Include the work done, location and outcome.]",
    name: "[Reviewer 1]",
    role: "[Property type, City]",
  },
  {
    stars: 5,
    text:
      "[TODO: real review #2. Replace before publishing.]",
    name: "[Reviewer 2]",
    role: "[Property type, City]",
  },
  {
    stars: 5,
    text:
      "[TODO: real review #3. Replace before publishing.]",
    name: "[Reviewer 3]",
    role: "[Property type, City]",
  },
];

export const faqs = [
  {
    q: "Do you offer free quotes?",
    a:
      "Yes. Tell us the space and the job — we'll come back with a quote. For larger jobs we can arrange a site visit.",
  },
  {
    q: "What areas do you cover?",
    a:
      "[TODO: confirm coverage area — e.g. Manchester, Greater Manchester, North West, all UK.]",
  },
  {
    q: "Are you insured?",
    a:
      "[TODO: confirm public liability cover and any industry certifications before publishing.]",
  },
  {
    q: "Do you bring your own equipment and products?",
    a:
      "Yes — every job is fully equipped. Eco-friendly product options available on request.",
  },
  {
    q: "How quickly can you start?",
    a:
      "[TODO: confirm typical lead times — same week / next-day / by appointment.]",
  },
];

// TODO: bellserviss partner brands left in as placeholder logos so the row
// renders. Replace with M14service partners (or remove the section in nav).
export const partners = [
  { name: "[Partner 1]", src: "/images/viessmann.png" },
  { name: "[Partner 2]", src: "/images/junkers.png" },
  { name: "[Partner 3]", src: "/images/evopipes.png" },
  { name: "[Partner 4]", src: "/images/evasat.png" },
];
