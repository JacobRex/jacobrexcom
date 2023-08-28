import { portfolioItem } from 'composables/portfolio'

export const orbit = {
  id: 'orbit',
  route: '/portfolio/orbit',
  size: 'large',
  hero: '/images/portfolio/orbit_hero.jpg',
  title: 'Vue.js Component Library & Design System that Led to an Exit',
  client: 'Weebly & Square',
  content: [
    { type: 'paragraph', content: `I was hired by Weebly to form a new team that would develop the reusable component library that would be used to rebuild Weebly’s dashboard & website builder. This was a big effort involving a full redesign of the UI, new marketing designs and a move away from a monolith repo. The effort was a huge success and played a major role in an acquistion by Square, Inc. just a few years later.` },
    { type: 'paragraph', content: `We took compponent development very seriously, as each component we built would be used by hundreds of engineers thousands of times. Every new component got a full proposal with different approaches weighed out and deliberated on. We considered props, slots, events, naming conventions, ux, future concerns and took efforts to balance business logic and flexibility to avoid needing breaking changes in the future. The components we built were easy for our dev's to use to build new views and kept our feature delivery fast, even as we started to scale rapidly.` },
    { type: 'paragraph', content: `Post acquisition, we worked with Square designers to align our branding styles and UX patterns to make a cohesive experience across Square’s various mobile, web and app based platforms. Our code quality in our component library made this task easy, and we were able to convert the entire Weebly platform to a new design style in a matter of weeks.` },
    { type: 'paragraph', content: `I have hosted some of the docs for these components online.` },
  ],
  shots: ['/images/portfolio/orbit_shot.jpg'],
  tags: ['Component Library', 'Design System', 'Acquisition', 'Vue.js', 'Nuxt'],
  palette: ['#288FE9', '#000', '#AEB3B6'],
  year: '2015',
  liveUrl: 'https://orbit-docs-8f6f9.web.app/'
} as portfolioItem