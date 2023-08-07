<template>
  <component
    :is="icon"
    class="icon"
    :name="name"
    :aria-label="name"
    role="img"
  />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  /** The name of the icon to use */
  name: {
    type: String,
    required: true
  },
});

const icon = defineAsyncComponent(() =>
  import(`../assets/icons/${props.name}.svg`)
);
</script>

<style lang="scss">
.icon {
  & path {
    fill: currentColor;
  }
}
</style>