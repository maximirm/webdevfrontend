<template>
  <div>

    <div class="container update">
      <div class="mb-3">
        <h3>Create a new Diary Entry</h3>
        <label class="form-label">Headline</label>
        <input type="text" id="inputHeadline" class="form-control">
      </div>
      <div class="mb-3">
        <label  class="form-label">Entry</label>
        <textarea class="form-control" id="inputEntry" rows="4"></textarea>
      </div>
      <button class="ui olive button" @click="postEntry">Confirm</button>
    </div>


  </div>
</template>
<script>

import axios from "axios";
import {router} from "../main";

const ROOT_URL = 'http://localhost:8081/api'

export default {
  name: 'UploadForm',
  methods: {

    postEntry() {
      const headline = document.getElementById("inputHeadline").value;
      const entry = document.getElementById("inputEntry").value;
      axios.post(`${ROOT_URL}/entries`, {
        headline, entry
      })
          .then(
              router.push("mainPage")
          );


    }

  }
}

</script>

<style scoped>

.update{

  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 4px;
  background-color: #d2bc8f;

}

</style>
