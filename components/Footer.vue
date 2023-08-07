<template>
  <footer class="footer">
    <div class="footer__container">
      <h2 class="footer__heading">
        Let's team up
      </h2>
      <p class="footer__text">
        For over 15 years, I have assisted companies in achieving growth, designing & launching their products, and bringing their websites to life. Let's explore how I can contribute to your idea.
      </p>
      <Button
        variant="overlay"
        href="mailto:jacobrex+portfolio@gmail.com"
      >
        Say hello
      </Button>
    </div>
    <div class="footer__foot">
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
  padding: $space-lg 0;
  text-align: center;
  background: $gray-dark;
  
  @media(min-width: $screen-lg) {
    margin-top: $space-xl;
  }

  &__container {
    @include container;
    max-width: $width-md;

    @media(min-width: $screen-lg) {
      padding: $space-xl 0;
    }
  }

  &__heading {
    @include h2;
    margin-bottom: $space-md;
    color: $white;
  }

  &__text {
    margin-bottom: $space-md;
    color: $gray-light;
  }

  &__foot {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>