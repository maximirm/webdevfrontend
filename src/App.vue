<template>
  <div :style="myStyle">
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
      myStyle:{
       backgroundColor:"#bdc6a0",
        minHeight: "100%"
      }

    }
  }
};


</script>

<style scoped>

body{
}

</style>

