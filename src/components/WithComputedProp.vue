<script>
import { ref, computed, useCssModule } from 'vue';

export default {
  props: {
    msg: String,
    padding: {
      type: Number,
      default: 4
    }
  },
  setup(props) {
    const styles = useCssModule();
    const rootClasses = computed(() => ({
      [styles.root]: true,
    }));

    const cssVars = computed(() => ({
      '--p': props.padding,
    }));

    return { rootClasses, cssVars };
  },
};
</script>

<template>
  <div :class="rootClasses" :style="cssVars">{{ msg }}</div>
</template>

<style module>
.root {
  padding: calc(2 * var(--p));
}
</style>
