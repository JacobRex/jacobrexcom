import { defineStore } from 'pinia'
import { extend } from '@vue/shared'

/* Typescript
---------------------------------------------- */
const component = extend({});

type VueComponent = InstanceType<typeof component>;

interface LayerProps {
  component: null | VueComponent;
  props?: object;
}

interface LayerState {
  layerState: LayerProps;
}

/* Layering Code
---------------------------------------------- */
const initialState = { component: null, props: {} };

export default defineStore('layer', {
  state: (): LayerState => ({ layerState: initialState }),
  actions: {
    openLayer(payload: LayerProps) {
      const { props, component } = payload;
      this.layerState = { component, props: props || {} };
    },
    closeLayer() {
      this.layerState = initialState;
    },
  }
});