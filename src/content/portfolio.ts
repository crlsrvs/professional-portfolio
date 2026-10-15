// Source: DOCS/Carlos_Rivas_CV_EN_2.pdf. Update this file to personalize the site.
export const portfolio = {
  name: 'Carlos Rivas',
  initials: 'cr',
  role: 'Software Engineer',
  portrait: {
    src: 'carlos-rivas-1200.jpg',
    smallSrc: 'carlos-rivas-640.jpg',
    alt: 'Carlos Rivas outdoors, wearing a dark shirt',
    width: 1200,
    height: 800,
  },
  location: 'Santiago, Chile',
  email: 'ridge.cirque6293@eagereverest.com',
  // GitHub account comes from this repository's origin; LinkedIn and email come from the CV.
  links: { linkedin: 'https://www.linkedin.com/in/rivas-carlos', github: 'https://github.com/crlsrvs' },
  seo: {
    title: 'Carlos Rivas — Software Engineer',
    description: 'Software Engineer in Santiago, Chile. React, TypeScript, and enterprise applications across advertising, access management, and financial services.',
  },
  navigation: [ { label: 'About', id: 'about' }, { label: 'Work', id: 'work' }, { label: 'Expertise', id: 'expertise' }, { label: 'Contact', id: 'contact' } ],
  hero: {
    eyebrow: 'FRONTEND ENGINEERING · ENTERPRISE PRODUCTS',
    title: ['Thoughtful interfaces.', 'Real-world complexity.'],
    description: 'I’m Carlos, a Software Engineer building web and mobile applications with React and TypeScript. I turn complex product requirements into clear, usable experiences.',
    workLabel: 'Explore my work',
    contactLabel: 'Get in touch',
    focusLabel: 'THE WORK I CARE ABOUT',
    focus: ['Interfaces that make complex workflows clear.', 'Reusable components that help teams build together.', 'Accessible experiences, built for everyday use.'],
    stack: ['React', 'TypeScript', 'REST APIs'],
  },
  about: {
    label: '01 / ABOUT',
    title: 'Engineering with the whole product in mind.',
    paragraphs: [
      'My experience spans digital advertising, construction software, financial services, and internal enterprise tools. I specialize in frontend development, with a full stack background that helps me work across product boundaries.',
      'I enjoy solving the details that make applications work well: reusable components, permissions and access flows, API integration, accessibility, and production support. I collaborate with engineering teams from technical planning through rollout.',
    ],
    facts: [ { label: 'Based in', value: 'Santiago, Chile' }, { label: 'Languages', value: 'Spanish · English C1' }, { label: 'Education', value: 'BSc, Informatics Engineering', detail: 'Universidad Nacional Experimental de Guayana' } ],
  },
  work: {
    label: '02 / SELECTED PROFESSIONAL WORK',
    title: 'Built as part of a team.\nMade for real users.',
    introduction: 'A selection of contributions to commercial products and enterprise applications.',
    contributionLabel: 'MY CONTRIBUTIONS',
    items: [
      {
        number: '01', theme: 'advertising', category: 'DIGITAL ADVERTISING', company: 'Mercado Libre', context: 'Senior Software Engineer · Mar 2025 – Present',
        title: 'Advertising tools, from setup to production.',
        description: 'Contributed to Sponsor Follow, a new frontend application for the advertising Demand Side Platform, from initial setup through production rollout.',
        contributions: ['Implemented Video Ads, coupons, budgets with bonuses, placement previews, and campaign metrics dashboards.', 'Developed reusable components shared across more than four applications, with Storybook documentation.', 'Integrated REST APIs and feature flags, and coordinated routing and analytics changes across repositories.'],
        technologies: ['React', 'TypeScript', 'Andes Design System', 'Storybook'],
        visual: { label: 'PRODUCT FOCUS', title: 'Campaign experiences', rows: ['Campaign creation', 'Budgets & bonuses', 'Placement previews'], footer: 'Reusable components · Progressive rollouts' },
      },
      {
        number: '02', theme: 'access', category: 'ACCESS & LICENSING', company: 'Autodesk · via Globant', context: 'Software Engineer at Globant · Mar 2021 – Mar 2025',
        title: 'Making enterprise access manageable.',
        description: 'Built React features for BIM 360 and Construction Cloud, covering users, permissions, project access, and product and subscription assignment.',
        contributions: ['Led development of participant management and bulk invitations across multiple project licensing levels.', 'Handled technical planning and served as a point of contact for specific features.', 'Provided on-call and escalation support for production incidents and critical support tickets.'],
        technologies: ['React', 'User management', 'Permissions', 'Production support'],
        visual: { label: 'PRODUCT FOCUS', title: 'Connected access flows', rows: ['People & invitations', 'Roles & permissions', 'Projects & subscriptions'], footer: 'Account access · Project licensing' },
      },
      {
        number: '03', theme: 'mobile', category: 'MOBILE & ACCESSIBILITY', company: 'AFP Provida & Box · via Globant', context: 'Software Engineer at Globant · Mar 2021 – Mar 2025',
        title: 'Experiences across devices and abilities.',
        description: 'Worked on financial services mobile development and accessibility improvements for an enterprise web application.',
        contributions: ['Led frontend development of the AFP Provida mobile application using React Native.', 'Implemented WCAG accessibility improvements in the Box React web application.'],
        technologies: ['React Native', 'React', 'WCAG accessibility'],
        visual: { label: 'PRODUCT FOCUS', title: 'Everyday usability', rows: ['Mobile interfaces', 'Accessible interactions', 'Web experiences'], footer: 'Financial services · Enterprise software' },
      },
    ],
  },
  experience: {
    label: 'THE PATH SO FAR', title: 'Earlier experience', expandLabel: 'Explore earlier roles',
    items: [
      { company: 'SEIDOR Chile', role: 'Software Developer', dates: 'Apr 2019 – Mar 2021', description: 'Built React features for the Chilean Judiciary’s internal oral trial scheduling system. Gathered requirements with teams and end users, and provided occasional Java backend support.' },
      { company: 'Option SPA', role: 'Frontend Developer', dates: 'Feb 2018 – Apr 2019', description: 'Contributed to Sky Airline’s React Native application, Entel Marketplace’s Vue.js back-office, and QubitTV’s Backbone.js Smart TV application.' },
      { company: 'Nostrum Mobility Ltda.', role: 'Full Stack Developer', dates: 'Oct 2017 – Feb 2018', description: 'Led development of a transportation application with Angular 2 and PHP / Slim Framework, integrating real-time geolocation and vehicle tracking APIs.' },
      { company: 'Grupo Hostienda', role: 'Frontend Developer', dates: 'Mar 2017 – Sep 2017', description: 'Developed and maintained an e-commerce platform and back-office with PHP, OpenCart, and JavaScript.' },
      { company: 'Imagina Colombia', role: 'Frontend Developer', dates: 'Nov 2016 – Mar 2017', description: 'Contributed to four applications with PHP / Laravel and JavaScript across healthcare, parking reservations, digital services, and product catalogs.' },
    ],
  },
  skills: {
    label: '03 / TECHNICAL EXPERTISE', title: 'A practical toolkit.', introduction: 'Technologies and practices I bring to product engineering.',
    groups: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS / BEM', 'React Native'] },
      { title: 'Components & quality', items: ['Storybook', 'React Testing Library', 'WCAG accessibility', 'Feature flags', 'Git'] },
      { title: 'Backend & integration', items: ['REST APIs', 'Node.js', 'Express', 'PHP', 'Java backend support'] },
    ],
  },
  confidentiality: {
    label: 'A NOTE ON PROFESSIONAL WORK', title: 'Some work lives behind the scenes.',
    description: 'Several projects are internal applications or commercial products. Their source code and some production environments are not public. I’m happy to discuss my contributions, technical decisions, and collaboration with the team during an interview.',
  },
  contact: {
    label: '04 / CONTACT', title: 'Let’s talk about\nwhat you’re building.',
    description: 'For engineering opportunities or a conversation about my experience, get in touch.',
    emailLabel: 'Send an email', linkedinLabel: 'LinkedIn', githubLabel: 'GitHub',
  },
  footer: 'Built with React & TypeScript. Designed to keep the work in focus.',
} as const
