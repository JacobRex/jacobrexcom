<template>
  <div class="social">
    <a
      v-for="site in socialMedia"
      :key="site.icon"
      class="social__link"
      :href="site.link"
      target="_blank"
    >
      <Icon :name="site.icon" />
    </a>
  </div>
</template>

<script lang="ts" setup>
const socialMedia = [
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/jacobrex/'
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/jacobtherex/'
  },
  {
    icon: 'dribbble',
    link: 'https://dribbble.com/jacob-rex'
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/jacob_rex'
  },
]
</script>

<style lang="scss">
.social {
  display: flex;
  gap: $space-md;

  &__link {
    color: currentColor;
  }
}
</style>