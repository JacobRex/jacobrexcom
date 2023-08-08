<template>
  <div class="app">
    <main class="main">
      <Hero />
      <MyWork />
    </main>
    <Layer />
  <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Seasoned designer & UI architect - Jacob Rex",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "design, designer, ui, ux, archiect, ui architect, web design, component library, design system, figma, vue, nuxt, typescript"},
    {
      hid: "description",
      name: "description",
      content:
        "I've spent more than 15 years creating websites, component libraries, and design systems that launched startups, enhanced metrics, fostered company growth, and resulted in acquisitions. My approach starts with a deep understanding of challenges and objectives, enabling me to deliver simple & elegant solutions that shape user experiences.",
    },
    {
      property: "og:title",
      content: "Hello! I'm Jacob Rex, a seasoned designer & architect and I create interfaces users love",
    },
    {
      property: "og:description",
      content:
        "I've spent more than 15 years creating websites, component libraries, and design systems that launched startups, enhanced metrics, fostered company growth, and resulted in acquisitions. My approach starts with a deep understanding of challenges and objectives, enabling me to deliver simple & elegant solutions that shape user experiences.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "http://www.jacobrex.com",
    },
    {
      property: "og:image",
      content: "/images/portfolio/fluid-studies_hero.jpg",
    },
  ],
  link: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" },
    { rel: "manifest", href: "/favicons/site.webmanifest" },
    { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#5bbad5" },
  ]
})
</script>

<style lang="scss">
/* Resets
---------------------------------------------- */
body {
  @include paragraph;
  margin: 0;
  padding: 0;
  color: $gray-medium;
  font-family: $font-family;
  background: $gray-dark;
}

h1,h2,h3,h4,h5,h6 {
  margin-top: 0;
  font-weight: $font-weight-semibold;
}

a:not([class]) {
  color: currentColor;
}

/* App
---------------------------------------------- */
.app {
  padding-top: $space-lg;
  background: $white;
  border-top: $space-xs solid $gray-dark;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media(min-width: $screen-lg) {
    padding-top: $space-xl;
    border-top: $space-sm solid $gray-dark;
  }
}

/* Main
---------------------------------------------- */
.main {
  @include container;
}
</style>