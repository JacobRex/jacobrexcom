<template>
  <div class="my-work">
    <div class="my-work__intro">
      <h2 class="my-work__heading">
        My Work
      </h2>
      <p class="my-work__text">
        Here is a selection of my past design and development projects. You can see more on my <a href="https://dribbble.com/jacob-rex" target="_blank">dribbble</a>.
      </p>
    </div>
    <div class="my-work__portfolio">
      <NuxtLink
        v-for="project in portfolio"
        :key="project.name"
        :to="project.route"
        :class="[
          'my-work__portfolio-link',
          `size-${project.size}`
        ]"
      >
        <img
          :class="[
            'my-work__portfolio-img',
            `size-${project.size}`
          ]"
          :src="project.hero"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.my-work {
  margin: $space-xl 0;

  &__intro {
    max-width: $width-sm;
    margin: 0 auto $space-md;
    text-align: center;
  }

  &__portfolio {
    display: flex;
    flex-wrap: wrap;
    gap: $space-lg;
  }

  &__portfolio-link {
    font-size: 0;

    &.size-small {
      width: 100%;

      @media(min-width: $screen-md) {
        width: calc(50% - ($space-lg/2));
      }
    }

    &.size-large {
      width: 100%;
    }
  }

  &__portfolio-img {
    width: 100%;
    cursor: pointer;
  }
}
</style>