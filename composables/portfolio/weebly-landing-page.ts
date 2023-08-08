import { portfolioItem } from 'composables/portfolio'

export const weeblyLandingPage = {
  id: 'weebly-landing-page',
  route: '/portfolio/weebly-landing-page',
  size: 'large',
  hero: '/images/portfolio/weebly-landing-page_hero.jpg',
  title: 'Landing Page Development',
  client: 'Weebly',
  content: [
    { type: 'paragraph', content: 'Sometime around 2016, Weebly wanted to position itself differently with its marketing. The company began developing new designs for our internal tools and website.' },
    { type: 'paragraph', content: 'I was tasked with developing these landing pages. I worked closely with our designer <a href="https://dribbble.com/ryanhunter" target="_blank">Ryan DePaola</a> to develop beautiful, mobile friendly websites that loaded as quickly as possible. Ryan had big ideas for animations & interactions on these pages, and I would write custom scripts to make it all happen with jQuery and CSS.' },
  ],
  shots: ['/images/portfolio/weebly-landing-page_shot.jpg'],
  year: '2017',
  tags: ['Web Development', 'Mobile Web', 'Performance', 'Internationalization'],
  palette: ['#288FE9', '#000', '#AEB3B6'],
} as portfolioItem