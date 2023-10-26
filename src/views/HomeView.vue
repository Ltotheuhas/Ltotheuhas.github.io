<template>
  <RandomImage :numImages="randomNumImages" style="position: fixed; "/>
</template>

<script>
import { defineComponent, ref } from 'vue';

// Components
import RandomImage from '../components/RandomImage.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    RandomImage,
  },

  setup() {
    const randomNumImages = ref(1); // Initialize with 1 image

    const generateRandomNumImages = () => {
      const min = 1;
      const max = 50;
      randomNumImages.value = Math.floor(Math.random() * (max - min + 1)) + min;
    };

    generateRandomNumImages();

    return {
      randomNumImages,
      generateRandomNumImages,
    };
  },
});
</script>