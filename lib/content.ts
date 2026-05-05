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
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

// Higher-level service categories used by the "products / solutions" component.
// Image paths point at the bellserviss placeholder set until M14service photos arrive.
export const productCategories = [
  {
    slug: "carpet-upholstery",
    title: "Carpet & upholstery",
    sub: "Deep extraction cleaning",
    img: "/images/projects/siltumsukni.jpg",
    blurb:
      "Carpets, rugs, sofas, mattresses and soft furnishings — restored to like-new.",
  },
  {
    slug: "hard-floors",
    title: "Hard floor polishing",
    sub: "Stone, vinyl and wood",
    img: "/images/projects/pellet-boilers.jpg",
    blurb:
      "Stripping, sealing and polishing for stone, vinyl and wood floors.",
  },
  {
    slug: "industrial",
    title: "Factory & warehouse",
    sub: "Industrial floor care",
    img: "/images/projects/floor-heating.jpg",
    blurb:
      "Production halls, warehouses and large-format facilities.",
  },
  {
    slug: "high-level",
    title: "High level cleaning",
    sub: "Hard-to-reach surfaces",
    img: "/images/projects/manifold.jpg",
    blurb:
      "Beams, vents, ceilings and elevated surfaces with proper access kit.",
  },
  {
    slug: "deep-clean",
    title: "Deep & post-build",
    sub: "One-off resets",
    img: "/images/projects/solar.jpg",
    blurb:
      "Move-out, end-of-tenancy and post-renovation deep cleans.",
  },
  {
    slug: "recurring",
    title: "Recurring cleaning",
    sub: "Daily / weekly maintenance",
    img: "/images/projects/rekuperacija.jpg",
    blurb:
      "Office and commercial maintenance schedules tailored to your space.",
  },
];

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
