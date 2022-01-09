<template>

  <div>

    <div class="row">
      <div class="col-md-8">
        <div class="detail">
          <EntryDetail :entry="selectedEntry"></EntryDetail>
          <div v-if="selectedEntry" class="ui buttons container">
            <button class="teal ui button" @click="toggleUpdate">Update</button>
            <button class="orange ui button" @click="deleteEntry(selectedEntry.id)">Delete</button>
          </div>

        </div>

        <div v-if="update" class="container update">
          <div class="mb-3">
            <label class="form-label">Headline</label>
            <input type="text" class="form-control" :placeholder="selectedEntry.headline">
          </div>
          <div class="mb-3">
            <label  class="form-label">Entry</label>
            <textarea class="form-control" rows="4" :placeholder="selectedEntry.entry"></textarea>
          </div>
          <button class="ui olive button">Confirm</button>
        </div>

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

.update{

  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 4px;

}

.buttons{

  padding: 10px;

}

.detail{

  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 4px;

}

</style>
