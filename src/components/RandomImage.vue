<template>
    <div>
      <div
        class="image-container"
        v-for="(imageSource, index) in imageSources"
        :key="index"
      >
        <img
          :src="imageSource"
          :style="{
            top: randomPositions[index] ? randomPositions[index].top + 'px' : '0',
            left: randomPositions[index] ? randomPositions[index].left + 'px' : '0',
          }"
        />
      </div>
    </div>
  </template>  
  
<script>
export default {
    props: {
        numImages: Number,
    },
    data() {
        return {
            imageSources: [],
            randomPositions: [],
        };
    },
    methods: {
        getRandomImages() {
            for (let i = 0; i < this.numImages; i++) {
                this.randomString(i);
            }
        },
        randomString(index) {
            const chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
            const stringlength = 5;
            let text = '';
            for (let i = 0; i < stringlength; i++) {
                const rnum = Math.floor(Math.random() * chars.length);
                text += chars.substring(rnum, rnum + 1);
            }

            const source = 'https://i.imgur.com/' + text + '.jpg';

            const image = new Image();
            image.onload = () => {
                if (image.width === 161) {
                    this.randomString(index);
                } else {
                    this.imageSources[index] = source;
                    this.randomPositions[index] = this.generateRandomPosition();
                }
            };
            image.src = source;
        },
        generateRandomPosition() {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            const maxTop = windowHeight - 200; // Adjust as needed
            const maxLeft = windowWidth - 200; // Adjust as needed

            const randomTop = Math.floor(Math.random() * maxTop);
            const randomLeft = Math.floor(Math.random() * maxLeft);

            return { top: randomTop, left: randomLeft };
        },
    },
    created() {
        this.getRandomImages();
    },
};
</script>
  
<style scoped>
.image-container {
    position: relative;
    display: inline-block;
}

img {
    position: absolute;
    max-height: 500px;
    max-width: 500px;
}
</style>