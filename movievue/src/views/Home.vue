<template>
  <div class="home">
    <Carousel/>
    <HeaderFavourites/>
    <webapp-widgetslider/>
    <webapp-widgetslider/>
    <webapp-widgetslider/>
  </div>
</template>

<script>
import WidgetSlider from "../components/WidgetSlider";
import Carousel from "../components/Carousel";
import HeaderFavourites from "../components/HeaderFavourites";

export default {
  name: 'Home',
  components: {
    "webapp-widgetslider": WidgetSlider,
        "Carousel": Carousel,
    "HeaderFavourites": HeaderFavourites
  }
}
</script>
