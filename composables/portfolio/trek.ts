import { portfolioItem } from 'composables/portfolio'

export const trek = {
  id: 'trek',
  route: '/portfolio/trek',
  size: 'small',
  hero: '/images/portfolio/trek_hero.jpg',
  title: 'Hackathon Project: Automated Documentation ',
  client: 'Trek',
  content: [
    { type: 'paragraph', content: 'During my time at Trek, I participated in a Hackathon project where I was trying to make component documentation as easy as possible. Typically, these are hand written which can be pretty time consuming, but using a few plugins I can automatically determine what props, slots, and events a component has and automatically document them. Inline comments can be used for additioanl details as needed, and also make the components self documenting if devs were ever to look at the source code.' },
    { type: 'paragraph', content: 'For icing on the cake, I added an automated live demo that is purely prop based, so components could be tested.' }
  ],
  shots: ['/images/portfolio/trek_shot.jpg'],
  year: '2021',
  tags: ['Web Design', 'Web Development', 'Design Systems', 'Component Libraries', 'Documentation', 'Automation', 'Vue.js', 'Nuxt'],
  palette: ['#ce1a2b', '#1a1a1a', '#767676', '#e8e8e8'],
  liveUrl: 'https://pedal-ui.firebaseapp.com/'
} as portfolioItem