<script>
import { ref, computed, useCssVars, useCssModule } from 'vue';

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

    useCssVars(() => ({
      p: props.padding
    }));

    return { rootClasses };
  },
};
</script>

<template>
  <div :class="rootClasses">{{ msg }}</div>
</template>

<style module>
.root {
  padding: calc(2 * var(--p));
}
</style>
