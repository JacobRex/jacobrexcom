import { portfolioItem } from 'composables/portfolio'

export const square = {
  id: 'square',
  route: '/portfolio/square',
  size: 'large',
  hero: '/images/portfolio/square_hero.jpg',
  title: 'Landing Page Development',
  client: 'Square Inc',
  content: [
    { type: 'paragraph', content: 'After acquiring Weebly, Square wanted to find ways to make the customer journey of going from zero to an online store easier. One of the main pain points for customers is product photography, and we were thinking of ways to help with this. We developed a service where customers could mail us their products and get photos taken for them.' },
    { type: 'paragraph', content: 'I was tasked with developing this website. I worked with the design team to add various animations and got constant feedback throughout the whole process.' },
    { type: 'paragraph', content: 'The website was designed by <a href="https://dribbble.com/ryanhunter" target="_blank">Ryan DePaola</a>.' }
  ],
  shots: ['/images/portfolio/square_shot.jpg'],
  year: '2018',
  tags: ['Web Development', 'Mobile Web', 'Animation'],
  palette: ['#C35070', '#1A1A1A', '#B2B2B2'],
} as portfolioItem