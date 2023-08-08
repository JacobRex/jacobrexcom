<template>
  <div class="app">
    <main class="main">
      <NuxtPage />
    </main>
    <Layer />
  <Footer />
  </div>
</template>

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