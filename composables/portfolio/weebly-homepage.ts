import { portfolioItem } from 'composables/portfolio'

export const weeblyHomepage = {
  id: 'weebly-homepage',
  route: '/portfolio/weebly-homepage',
  size: 'large',
  hero: '/images/portfolio/weebly-homepage_hero.jpg',
  title: 'Mobile First Animated Homepage',
  client: 'Weebly',
  content: [
    {
      type: 'paragraph',
      content: 'Sometime around 2016, Weebly wanted to position itself differently with its marketing. The company began developing new designs for our internal tools and website.'
    },
    {
      type: 'paragraph',
      content: 'I was tasked with developing several iterations of the weebly.com homepage, which got over 20 million views per month at the time. We pulled out all the stops on this one with various animations based on mouse position, scroll position and items fading in as you scrolled.'
    },
    {
      type: 'paragraph',
      content: 'I worked closely with our designer <a href="https://dribbble.com/ryanhunter" target="_blank">Ryan DePaola</a> to get this done, though it was a project with loads of stakeholders. We had to ensure maximum browser, device and locale compatibility which was a real challenge, but we were thrilled with the results. This created a significant increase in signups and revenue upon launch and we all celebrated accordingly.'
    },
  ],
  shots: ['/images/portfolio/weebly-homepage_shot.jpg'],
  year: '2016',
  tags: ['Web Development', 'Mobile Web', 'Performance', 'Internationalization'],
  palette: ['#288FE9', '#7B72FE', '#50D18E', '#000'],
} as portfolioItem