<template>
  <div class="limit__container">
    <div class="header">
      <webapp-header/>
    </div>
    <div class="main">
    <router-view></router-view>
    </div>
    <div class="footer">
      <webapp-footer/>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import WidgetSlider from "./components/WidgetSlider";
import Home from "./views/Home"

export default {
  name: 'App',
  components: {
    "Home": Home,
    "webapp-header": Header,
    "webapp-footer": Footer,
    "webapp-widgetslider": WidgetSlider,
  }
}

</script>
<style>
body {
  margin: 0;
  height: 100%;
  background: #F2F2F2;
}

.limit__container {
    margin: 0 6%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0 4px 8px 3px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0 4px 8px 3px rgba(34, 60, 80, 0.2);
    box-shadow: 0 4px 8px 3px rgba(34, 60, 80, 0.2);
}

.main {
  flex: 1 1 auto;
}
</style>
