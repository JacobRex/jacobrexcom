import { portfolioItem } from 'composables/portfolio'

export const fluidStudies = {
  id: 'fluid-studies',
  route: '/portfolio/fluid-studies',
  size: 'large',
  hero: '/images/portfolio/fluid-studies_hero.jpg',
  title: 'Web Design & Shopify Site',
  client: 'Fluid Studies',
  content: [{
    type: 'paragraph',
    content: `I was approached to design a Shopify site for my brother's new brewery, Fluid Studies. The objective was to create an engaging platform that introduces the brewery, generates excitement for their upcoming collection, and supports future business growth. We established the website's goal as encouraging visitors to join the newsletter for updates on the collection launch and future events. By working within the design limitations of Shopify, I successfully infused a youthful, modern, and branded ambiance by incorporating their logo and utilizing their signature gold color.`
  }],
  shots: ['/images/portfolio/fluid-studies_shot.jpg'],
  year: '2023',
  tags: ['Web Design', 'Shopify'],
  palette: ['#BB9559', '#222', '#777', '#AAA'],
} as portfolioItem