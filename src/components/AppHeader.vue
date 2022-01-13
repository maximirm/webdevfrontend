<template>
  <nav class="ui secondary pointing menu">
    <a href="/" class="active item">
      Diary
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/mainPage" class="item">Entries</router-link>
        <router-link to="/upload" class="item">New Entry</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <router-link to="/login" v-else class="ui item">Login</router-link>

    </div>
  </nav>
</template>


<script>

import {mapGetters, mapActions} from "vuex";


export default {

  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout'])


  }
}

</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
.ui{
  font-size: 20px;
}

</style>
