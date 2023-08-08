<template>
  <div class="hero">
    <div class="hero__content">
      <h1 class="hero__heading">✌️</h1>
      <h1 class="hero__heading">Hello! I'm Jacob Rex, a seasoned designer & architect and I create interfaces users love</h1>
      <p class="hero__text">I've spent more than 15 years creating websites, component libraries, and design systems that launched startups, enhanced metrics, fostered company growth, and resulted in acquisitions. My approach starts with a deep understanding of challenges and objectives, enabling me to deliver simple & elegant solutions that shape user experiences.</p>
      <div class="hero__social">
        <Social />
      </div>
    </div>
    <div class="hero__media">
      <img class="hero__img" src="/images/me.jpg" />
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  gap: $space-lg;
  flex-direction: column;
  max-width: $width-md;
  margin: auto;

  @media(min-width: $screen-lg) {
    flex-direction: row;
    max-width: none;
  }

  /* Content
  -------------------------------------------- */
  &__content {
    flex: 1;
  }

  &__heading {
    @include h1;
    margin-bottom: $space-md;
    color: $gray-dark;
  }
  
  &__text {
    margin-bottom: $space-md;
  }

  &__social {
    color: $gray-dark;
  }

  /* Media
  -------------------------------------------- */
  &__media {
    flex: 0 0 auto;

    @media(min-width: $screen-lg) {
      max-width: $width-sm;
    }
  }

  &__img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: left 5%;

    @media(min-width: $screen-lg) {
      aspect-ratio: auto;
      object-fit: contain;
    }
  }
}
</style>