<template>
  <div class="portfolio-project">
    <img
      class="portfolio-project__hero"
      :src="hero"
    />
    <div class="portfolio-project__body">
      <div class="portfolio-project__content">
        <h1 class="portfolio-project__title">
          {{ title }}
        </h1>
        <h2 class="portfolio-project__client">
          {{ client }}
        </h2>
        <template v-for="(item, idx) in content">
          <h3
            v-if="item.type === 'heading'"
            :key="`heading-${idx}`"
            class="portfolio-project__heading"
          >
            {{ item.content }}
          </h3>
          <p
            v-if="item.type === 'paragraph'"
            :key="`paragraph-${idx}`"
            class="portfolio-project__paragraph"
            v-html="item.content"
          />
        </template>
        <Button
          v-if="liveUrl"
          class="portfolio-project__button"
          :href="liveUrl"
          target="_blank"
        >
          View Project
        </Button>
      </div>
      <div class="portfolio-project__sidebar">
        <h3 class="portfolio-project__year">
          {{ year }}
        </h3>
        <ul class="portfolio-project__tags">
          <li 
            v-for="tag in tags"
            :key="tag"
            class="portfolio-project__tag"
          >
            {{ tag }}
          </li>
        </ul>
        <div class="portfolio-project__palette">
          <div
            v-for="color in palette"
            :key="color"
            class="portfolio-project__palette-color"
            :style="`background: ${color}`"
          />
        </div>
      </div>
    </div>
    <div class="portfolio-project__shots">
      <template v-for="shot in shots">
        <template v-if="Array.isArray(shot)">
          <img
            v-for="subshot in shot"
            :key="subshot"
            class="portfolio-project__shot small"
            :src="subshot"
          />
        </template>
        <img
          v-else
          :key="shot"
          class="portfolio-project__shot"
          :src="shot"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { portfolioText } from '../composables/portfolio'

defineProps({
  hero: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  content: {
    type: Array as PropType<portfolioText[]>,
    required: true,
  },
  year: {
    type: String,
    required: true
  },
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
  palette: {
    type: Array as PropType<string[]>,
    required: true,
  },
  shots: {
    type: Array as PropType<string[]>,
    required: true,
  },
  liveUrl: {
    type: String
  }
})
</script>

<style lang="scss">
.portfolio-project {
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: $width-lg;

  /* Hero
  -------------------------------------------- */
  &__hero {
    width: 100%;
  }

  /* Body
  -------------------------------------------- */
  &__body {
    display: flex;
    flex-direction: column;
    gap: $space-lg;
    padding: $space-md;
    background: white;

    @media(min-width: $screen-md) {
      flex-direction: row;
      padding: $space-lg;
    }
  }

  /* Content
  -------------------------------------------- */
  &__content {
    flex: 1;
  }

  &__title {
    @include h1;
    margin: 0 0 $space-sm;
  }

  &__client {
    @include h3;
    margin: 0 0 $space-md;
    color: $gray-light;
  }

  &__heading {
    @include h4;
    margin-top: $space-lg;
    color: $gray-light;
  }

  &__button {
    margin-top: $space-md;
  }

  /* Sidebar
  -------------------------------------------- */
  &__sidebar {
    width: 100%;
    @media(min-width: $screen-md) {
      width: $width-xs;
    }
  }

  &__year {
    @include h1;
    margin: 0 0 $space-md;
  }

  &__tags {
    padding: 0;
    margin: 0 0 $space-md;
    list-style: none;
  }

  &__tag {
    & + & {
      margin-top: $space-sm;
    }
  }

  &__palette {
    display: flex;
    gap: $space-sm;
    align-items: center;
  }

  &__palette-color {
    width: $space-md;
    height: $space-md;
    border-radius: $space-md;
  }

  /* Shots
  -------------------------------------------- */
  &__shots {
    display: flex;
    flex-wrap: wrap;
    gap: $space-md;
    padding: $space-md;
    background: white;

    @media(min-width: $screen-md) {
      gap: $space-lg;
      padding: $space-lg;
    }
  }

  &__shot {
    width: 100%;

    &.small {
      width: 100%;

      @media(min-width: $screen-md) {
        width: calc(50% - ($space-lg/2));
      }
    }
  }
  
}
</style>