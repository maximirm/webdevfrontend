<template>
  <div class="ui input">
    <input id="name" type="text" placeholder="Name">
    <input id="password" type="password" placeholder="Password">
    <button class="ui button" @click="validate">Login</button>

  </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'LoginForm',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['finalizeLogin']),
    validate()  {
      const name = document.getElementById("name").value;
      const password = document.getElementById("password").value;
      if (name === 'admin' && password === 'admin' && !this.isLoggedIn) {
        this.finalizeLogin();
      }
      else if (this.isLoggedIn) window.alert('already logged in');
      else window.alert('wrong input');
    }
  }
}

</script>



<style></style>
