<script>
import { ref, computed, useCssModule } from 'vue';

export default {
  props: {
    blue: false,
  },
  setup(props) {
    const styles = useCssModule();
    const rootClasses = computed(() => ({
      [styles.root]: true,
      [styles['root-blue']]: props.blue,
    }));

    return { rootClasses };
  },
};
</script>

<template>
  <div :class="rootClasses">{{ msg }}</div>
</template>

<style src="./HelloWorld.module.css" module />
