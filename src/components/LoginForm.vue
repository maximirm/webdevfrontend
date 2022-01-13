<template>
  <div class="ui input">
    <input class="" id="name" type="text" placeholder="Name">
    <input class="" id="password" type="password" placeholder="Password">
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



<style scoped>

.form-control{

  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 15px;
  background-color: #eee1cf;

}

</style>
