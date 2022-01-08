<template>

  <div>

    <div class="row">
      <div class="col-md-8">

        <EntryDetail :entry="selectedEntry"></EntryDetail>
        <div v-if="selectedEntry" class="ui buttons">
          <button class="teal ui button" @click="toggleUpdate">Update</button>
          <button class="orange ui button" @click="deleteEntry(selectedEntry.id)">Delete</button>
        </div>
        <input v-if="update" type="text" :value="selectedEntry.entry"/>


      </div>


      <div class="col-md-4">

        <EntryList :entries="entries"
                   @entrySelect="onEntrySelect"></EntryList>
      </div>





    </div>

  </div>
</template>
<script>

import EntryDetail from "./EntryDetail";
import EntryList from "./EntryList";
import axios from "axios";

const ROOT_URL = 'http://localhost:8081/api'

export default {
  name: 'MainPage',
  components: {
    EntryDetail,
    EntryList
  },
  data() {
    return {
      entries: [],
      selectedEntry: null,
      update: false
    }
  },
  methods: {
    fetchImages() {
      axios.get(`${ROOT_URL}/entries`)
      .then(
          response => {
            this.entries = response.data;
          }
      );
    },
    deleteEntry(id) {
      return axios.delete(`${ROOT_URL}/entries/` + id)
          .then(
              this.fetchImages
          ).then(
              this.selectedEntry = null
          )

    },
    onEntrySelect(entry) {
      this.selectedEntry = entry;
    },
    toggleUpdate() {
      this.update = !this.update
    }
  },
  created() {
    this.fetchImages()
  },

}
</script>

<style scoped>


</style>
