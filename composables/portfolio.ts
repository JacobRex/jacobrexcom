export interface portfolioItem {
  id: string,
  route: string,
  size: 'large' | 'small',
  hero: string,
  title: string,
  client: string,
  content: portfolioText[],
  shots: string[],
  year: string,
  tags: string[],
  palette: string[],
  liveUrl?: string,
}

export interface portfolioText {
  type: 'paragraph' | 'heading',
  content: string
}

export const portfolio = [
  {
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
  },
  {
    id: 'revival-lane',
    route: '/portfolio/revival-lane',
    size: 'large',
    hero: '/images/portfolio/revival-lane_hero.jpg',
    title: 'Branding & Landing Page',
    client: 'Revival Lane',
    content: [
      { type: 'paragraph', content: 'Revival Lane is a passion project that I run with my wife. We buy & sell mostly mid century furniture, clothes, decor, records and more. From the very beginning we wanted to stand out from the usual antique sellers with a visible and like-able brand.' },
      { type: 'heading', content: 'Branding' },
      { type: 'paragraph', content: 'Branding is more than just a logo, its the way people interact and shop with us. From the moment they walk in our brand experience takes over with the music we play, to the branded tags on all our merchandise, to the type of items we curate, to the way we stage items, to how we decorate -- all of it stays true to our brand identity.' },
      { type: 'paragraph', content: 'I wanted our brand to feel retro & young rather than retro & old because we are leveraging modern tools like Square, loyalty programs, and more to service our customers. I also wanted to avoid being too kitsch, which is a pitfall I think many mid century/retro brands make. For the logo, I modified some script fonts for visibility and character and added a starburst for flare. This font has served us well on everything from our web presence, to business cards, to signs and more.' },
      { type: 'heading', content: 'Website' },
      { type: 'paragraph', content: `When it came to the website, I wanted something that felt big so we had room to grow. I kept things light and fun with my wife’s illustrations and gave it a modern feel with plenty of white space and some iconography. The result is a website that makes people want to come in, and the brand gives people a good experience.` },
    ],
    shots: [
      '/images/portfolio/revival-lane_shot-logo.jpg',
      [
        '/images/portfolio/revival-lane_shot-new.jpg',
        '/images/portfolio/revival-lane_shot-sign.jpg',
      ],
      [
        '/images/portfolio/revival-lane_shot-window.jpg',
        '/images/portfolio/revival-lane_shot-aframe.jpg',
      ],
      '/images/portfolio/revival-lane_shot-home.jpg',
      '/images/portfolio/revival-lane_shot-form.jpg',
    ],
    year: '2023',
    tags: ['Branding', 'Web Design', 'Graphic Design', 'Web Development', 'Copywriting', 'Vue.js', 'Nuxt',],
    palette: ['#C82530', '#262627', '#C1C1C9', '#55B0BD'],
    liveUrl: 'https://revivallane.com/'
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id: 'weebly-homepage',
    route: '/portfolio/weebly-homepage',
    size: 'large',
    hero: '/images/portfolio/weebly-homepage_hero.jpg',
    title: 'Mobile First Animated Homepage',
    client: 'Weebly',
    content: [
      { type: 'paragraph', content: 'Sometime around 2016, Weebly wanted to position itself differently with its marketing. The company began developing new designs for our internal tools and website.' },
      { type: 'paragraph', content: 'I was tasked with developing several iterations of the weebly.com homepage, which got over 20 million views per month at the time. We pulled out all the stops on this one with various animations based on mouse position, scroll position and items fading in as you scrolled.' },
      { type: 'paragraph', content: 'I worked closely with our designer <a href="https://dribbble.com/ryanhunter" target="_blank">Ryan DePaola</a> to get this done, though it was a project with loads of stakeholders. We had to ensure maximum browser, device and locale compatibility which was a real challenge, but we were thrilled with the results. This created a significant increase in signups and revenue upon launch and we all celebrated accordingly.' },
    ],
    shots: ['/images/portfolio/weebly-homepage_shot.jpg'],
    year: '2016',
    tags: ['Web Development', 'Mobile Web', 'Performance', 'Internationalization'],
    palette: ['#288FE9', '#7B72FE', '#50D18E', '#000'],
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id: 'clinkle',
    route: '/portfolio/clinkle',
    size: 'small',
    hero: '/images/portfolio/treats_hero.jpg',
    title: 'Animated Prototype Website for a Startup',
    client: 'Clinkle',
    content: [
      { type: 'paragraph', content: `As a contractor for Clinkle, I was tasked with designing and building a prototype for a landing page for the mobile app Treats. The goal of the website was to maximize user comprehension of our product (which was very unique) and to push a new video which was in production at the time. Because the app is complex, I decided to explain the process one step at a time, in order to show the lifecycle of a "treat" and simultaneously explain what the app could do for you. I worked closely with Clinkle's motion designer Craig Avanzino, and incorprated videos of the app into the website which worked great! I refined the design over several weeks by showing new users this prototype and listening to their comments. This project involved deep collaboration with our marketing team, web team and other design team members and I am thrilled with the results.` }
    ],
    shots: ['/images/portfolio/treats_shot.jpg'],
    tags: ['Web Design', 'Web Development', 'Prototype'],
    palette: ['#28B156', '#212121', '#909090'],
    year: '2014',
    liveUrl: 'http://jacobrex.com/mockups/clinkle/'
  },
] as portfolioItem[]