import { portfolioItem } from 'composables/portfolio'

export const theBoondockSaintsOrigins = {
  id: 'the-boondock-saints-origins',
  route: '/portfolio/the-boondock-saints-origins',
  size: 'small',
  hero: '/images/portfolio/tbso_hero.jpg',
  title: 'Crowdfunding Campaign Site',
  client: 'The Boondock Saints',
  content: [
    { type: 'paragraph', content: 'This is a pre-order campaign site I built with the help of <a href="https://dribbble.com/benitez" target="_blank">Brian Benitez</a>, <a href="https://dribbble.com/ryanhunter" target="_blank">Ryan DePaola</a>, and <a href="https://dribbble.com/dcanies" target="_blank">Derrick Anies</a>. The goal of the website was to get users excited about a new tv series that is in production and encourage them to pre-order merch to help fund the series. Fully animated, responsive, integrated with <a href="https://www.trycelery.com/">trycelery.com</a> for pre-orders, this bad boy turned out great!' },
  ],
  shots: ['/images/portfolio/tbso_shot.jpg'],
  year: '2016',
  tags: ['Web Development', 'Mobile Web', 'Crowdfunding'],
  palette: ['#EB252E', '#0E0E0E', '#5A5A5A', '#9B9B9B'],
} as portfolioItem