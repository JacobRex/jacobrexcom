<template>
  <component
    :is="element"
    :class="`button variant-${variant}`"
    :href="href"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const props = defineProps({
  href: {
    type: String,
  },
  variant: {
    type: String,
    default: 'normal',
    validator: (val:string) => ['normal', 'overlay'].includes(val)
  }
})

const element = computed(() => {
  return props.href ? 'a' : 'button' ;
})
</script>

<style lang="scss">
.button {
  @include paragraph;
  display: inline-flex;
  align-items: center;
  height: $space-lg;
  margin: 0;
  padding: 0 $space-md;
  border: 2px solid;
  border-radius: $space-lg;
  outline: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  text-decoration: none;
  cursor: pointer;

  /* Variants ---------------------- */
  &.variant-normal {
    color: $gray-dark;
    border-color: $gray-dark;
  }

  &.variant-overlay {
    color: $white;
    border-color: $white;
  }
}
</style>