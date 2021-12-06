<template>
  <div class="slider">
    <Splide :options="{ rewind: true, autoplay: true, pauseOnHover: true}">
      <SplideSlide v-for="url in imgUrls">
        <img :src="url" alt="Sample 1">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import {defineComponent} from 'vue';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default defineComponent({
  components: {Splide, SplideSlide},
  data() {
    return {
      imgUrls: [
        "https://s2.vcdn.biz/static/f/3915111161/image.jpg/pt/r0x0x4",
        "https://s7.vcdn.biz/static/f/3907111201/image.jpg/pt/r0x0x4",
        "https://s8.vcdn.biz/static/f/3870251621/image.jpg/pt/r0x0x4",
        "https://s2.vcdn.biz/static/f/3798245351/image.jpg/pt/r0x0x4",
        "https://s2.vcdn.biz/static/f/3913689701/image.jpg/pt/r0x0x4",
        "https://s5.vcdn.biz/static/f/3910663481/image.jpg/pt/r0x0x4",
        "https://s7.vcdn.biz/static/f/3844197151/image.jpg/pt/r0x0x4",
        "https://s7.vcdn.biz/static/f/3887590291/image.jpg/pt/r0x0x4",
        "https://s6.vcdn.biz/static/f/3789943071/image.jpg/pt/r0x0x4",
        "https://s2.vcdn.biz/static/f/3788596181/image.jpg/pt/r0x0x4",
        "https://s1.vcdn.biz/static/f/3797100541/image.jpg/pt/r0x0x4",
        "https://s7.vcdn.biz/static/f/3906446461/image.jpg/pt/r0x0x4",
        "https://s8.vcdn.biz/static/f/3752647541/image.jpg/pt/r0x0x4",
        "https://s2.vcdn.biz/static/f/3844404371/image.jpg/pt/r0x0x4",
        "https://s3.vcdn.biz/static/f/3804702231/image.jpg/pt/r0x0x4",
        "https://s5.vcdn.biz/static/f/3733991591/image.jpg/pt/r0x0x4",
        "https://s5.vcdn.biz/static/f/3646760081/image.jpg/pt/r0x0x4",
        "https://s2.vcdn.biz/static/f/3664071101/image.jpg/pt/r0x0x4",
        "https://s8.vcdn.biz/static/f/3607117091/image.jpg/pt/r0x0x4https://s8.vcdn.biz/static/f/3607117091/image.jpg/pt/r0x0x4",
      ]
    }
  }
});
</script>


<style>
.splide__arrow {
  background: transparent;
  width: 50px;
  height: 50px;
  opacity: 0.1;
  transition: 0.3s;
}

.splide__arrow svg {
  height: 50px;
  width: 54px;
  fill: #a6a6a6;
}

.splide__slide img {
  width: 100%;
}

.slider {
  width: 100%;
}
</style>