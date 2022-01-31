<template>
  <div class="background" :style="{ backgroundImage: 'url(' + image + ')' }">
    <AppHeader/>
    <div class="=ui container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";


export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      image: "https://store-images.s-microsoft.com/image/apps.43770.13620970507672534.769a3906-91ca-4db7-9b00-2549ddae2af9.f4fa1bdf-bfc1-4bfc-a0cd-bb568b282c08?mode=scale&q=90&h=1080&w=1920"
    }
  }
};


</script>

<style scoped>
.background{
  width: 100%;
  height: 100%;
  background-size: cover;
}

</style>

