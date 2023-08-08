import { portfolioItem } from 'composables/portfolio'

export const patientPop = {
  id: 'patient-pop',
  route: '/portfolio/patient-pop',
  size: 'small',
  hero: '/images/portfolio/patient-pop_hero.jpg',
  title: 'Design System Audit, Component Library, & Documentation Website',
  client: 'Patient Pop',
  content: [
    { type: 'paragraph', content: 'I was hired by PatientPop to lead an initiative to build a Vue.js component library for a new design system, along with a documentation website for these components. The hope was that the design system would add more consistency and polish to the product and empower engineers at PatientPop so they can spend more time building features and less time fighting with CSS.'},
    { type: 'paragraph', content: 'I started with an audit of Sketch and Figma designs to identify patterns and break things down into new components. I also reviewed existing components to see how they could be optimized. Through collaboration with designers and engineered, we created new patterns that constrained some of the use cases to a more cohesive and predictable experience. I also encouraged designers to streamline their use of colors, spacing and interaction states which polish and consistency to the product.' },
    { type: 'paragraph', content: 'You can see some examples from the custom documentation website I designed & built which is powered by Vue.js & Nuxt. Each component has a markdown file documenting its usage, props, and events.' }
  ],
  shots: ['/images/portfolio/patient-pop_shot-home.jpg', '/images/portfolio/patient-pop_shot-interior.jpg'],
  tags: ['Design System', 'Component Library', 'Figma', 'Vue.js', 'Nuxt'],
  palette: ['#23d793', '#4a5472', '#e1e8ef'],
  year: '2020',
  liveUrl: 'https://pp-design-system.firebaseapp.com/'
} as portfolioItem