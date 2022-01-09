<template>

  <div>

    <div class="row">
      <div class="col-md-8">
        <div class="detail" v-if="selectedEntry">
          <EntryDetail :entry="selectedEntry"></EntryDetail>
          <div  class="ui buttons container">
            <button class="teal ui button" @click="toggleUpdate">Update</button>
            <button class="orange ui button" @click="deleteEntry(selectedEntry.id)">Delete</button>
          </div>

        </div>

        <div v-if="update" class="container update">
          <div class="mb-3">
            <label class="form-label">Headline</label>
            <input type="text" class="form-control" :placeholder="selectedEntry.headline" id="updateHeadline">
          </div>
          <div class="mb-3">
            <label  class="form-label">Entry</label>
            <textarea class="form-control" rows="4" :placeholder="selectedEntry.entry" id="updateEntry"></textarea>
          </div>
          <button class="ui olive button" @click="updateEntry(selectedEntry.id)">Confirm</button>
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
    fetchEntries() {
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
              this.fetchEntries,
              this.selectedEntry = null
          )

    },
    updateEntry(id){
      const headline = document.getElementById("updateHeadline").value;
      const entry = document.getElementById("updateEntry").value;

      axios.put(`${ROOT_URL}/entries/` + id, {
        headline, entry
      }).then(
          this.fetchEntries,
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
    this.fetchEntries()
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
