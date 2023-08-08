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
      <img
        v-for="project in portfolio"
        :key="project.id"
        :class="[
          'my-work__portfolio-img',
          `size-${project.size}`
        ]"
        :src="project.hero"
        @click="viewProject(project.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useLayerStore from "../stores/layer"
import PortfolioProject from './PortfolioProject.vue'

const store = useLayerStore();
function viewProject(id: string) {
  store.openLayer({
    component: PortfolioProject,
    props: portfolio.find(project => project.id === id)
  });
}
</script>

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
    gap: $space-md;

    @media(min-width: $screen-md) {
      gap: $space-lg;
    }
  }

  &__portfolio-img {
    cursor: pointer;

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
}
</style>