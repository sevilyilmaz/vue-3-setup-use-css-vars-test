<script>
import { ref, computed, useCssModule } from 'vue';

export default {
  setup(props) {
    const styles = useCssModule();
    const rootClasses = computed(() => ({
      [styles.root]: true,
    }));

    return { rootClasses };
  },
};
</script>

<template>
  <div :class="rootClasses">{{ msg }}</div>
</template>

<style src="./HelloWorld.module.css" module />
