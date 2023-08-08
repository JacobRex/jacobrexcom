<template>
  <Teleport to="body">
    <Transition name="layer">
      <div
        v-if="store.layerState?.component"
        class="layer"
        @click.self="store.closeLayer"
      >
        <component
          :is="store.layerState?.component"
          v-bind="store.layerState?.props"
          class="layer__component"
        />
        <Icon
          class="layer__close-icon"
          name="arrow-left"
          @click="store.closeLayer"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import useLayerStore from "../stores/layer"

const store = useLayerStore()
</script>

<style lang="scss" scoped>
/* Layer
---------------------------------------------- */
.layer {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  &__component {
    flex: 1;
    cursor: default;
  }

  &__close-icon {
    position: sticky;
    top: $space-md;
    flex: 0 0 auto;
    margin: $space-md;
    color: white;
  }
}

/* Transition
---------------------------------------------- */
.layer-enter-from,
.layer-leave-to {
  opacity: 0;

  .layer__component {
    transform: translateX(-$space-lg);
  }
}

.layer-enter-active,
.layer-leave-active {
  transition: 0.25s ease opacity;

  .layer__component {
    transition: 0.25s ease transform;
  }
}
</style>