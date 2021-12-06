<template>
  <div class="header__fav">
    <div v-for="img in favBlockImgs" class="fav__block">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderFavourites",
  data(){
    return {
      favBlockImgs: [
          "https://s6.vcdn.biz/static/f/3880699071/image.jpg/pt/r220x100x4",
          "https://s7.vcdn.biz/static/f/3883433101/image.jpg/pt/r220x100x4",
          "https://s4.vcdn.biz/static/f/2794840051/image.jpg/pt/r220x100x4",
          "https://s7.vcdn.biz/static/f/2485935241/image.jpg/pt/r220x100x4",
          "https://s2.vcdn.biz/static/f/2794669661/image.jpg/pt/r220x100x4"
      ]
    }
  }
}
</script>

<style scoped>
.header__fav {
  background: #F2F2F2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
}

.fav__block {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.5s;
}

.fav__block:hover {
  filter: brightness(80%);
}
</style>