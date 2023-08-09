<template>
  <footer class="footer">
    <div class="footer__container">
      <h2 class="footer__heading">
        Let's team up
      </h2>
      <p class="footer__text">
        In my career, I've driven company growth, designed & launched products, and breathed life into ideas. Let's discover how I can enhance your next project.
      </p>
      <Button
        variant="overlay"
        href="mailto:jacobrex+sayhello@gmail.com"
      >
        Say hello
      </Button>
    </div>
    <div class="footer__bottom">
      <Social class="footer__social" />
      <div class="footer__copyright">
        &copy; Jacob Rex
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  margin-top: $space-lg;
  text-align: center;
  background: $gray-dark;
  
  @media(min-width: $screen-lg) {
    margin-top: $space-xl;
  }

  /* Container
  -------------------------------------------- */
  &__container {
    @include container;
    max-width: $width-md;
    padding: $space-lg $space-md;

    @media(min-width: $screen-lg) {
      padding: $space-xl $space-md;
    }
  }

  /* Heading
  -------------------------------------------- */
  &__heading {
    @include h2;
    margin-bottom: $space-md;
    color: $white;
  }

  /* Text
  -------------------------------------------- */
  &__text {
    margin-bottom: $space-md;
    color: $gray-light;
  }

  /* Bottom
  -------------------------------------------- */
  &__bottom {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: $space-md;
    padding: $space-md;

    @media(min-width: $screen-md) {
      flex-direction: row;
    }
  }
}
</style>