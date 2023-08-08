import { portfolioItem } from 'composables/portfolio'

export const regionalNDT = {
  id: 'regional-ndt',
  route: '/portfolio/regional-ndt',
  size: 'large',
  hero: '/images/portfolio/regional-ndt_hero.jpg',
  title: 'Startup Web Design & Development',
  client: 'Regional NDT',
  content: [
    { type: 'paragraph', content: 'Regional NDT is a startup attempting to fix a common problem in the outdated aerospace industry. Many companies use 3rd parites to do non-destructive testing (ndt) on their parts, but are often left in the dark about the status of their parts, making quick turnarounds or accurate timelines very difficult.' },
    { type: 'paragraph', content: 'I worked together with Regional NDT to understand this and help them develop a landing page that would make their offering clear and differentiate them as a fresh, young and modern looking company. We kept the design simple and have each section attempt to answer common questions we anticipate new customers to have, to encourage them to take the next step and engage.' }
  ],
  year: '2022',
  tags: ['Web Design', 'Web Development', 'Copywriting', 'Vue.js', 'Nuxt'],
  palette: ['#6F9E41', '#222', '#999', '#DFE6D8'],
  shots: ['/images/portfolio/regional-ndt_shot.jpg'],
  liveUrl: 'https://regionalndt.com/'
} as portfolioItem