<template>
    <div class="row">
      <div class="col-md-8">
        <div class="detail" v-if="selectedEntry">
          <EntryDetail :entry="selectedEntry" ></EntryDetail>
          <div  class="ui buttons container">
            <button class="brown ui button" @click="toggleUpdate">Update</button>
            <button class="orange ui button" @click="deleteEntry(selectedEntry.id)">Delete</button>
          </div>
        </div>
        <div v-if="update" class="container update">
          <div class="mb-3">
            <h3>Update</h3>
            <label class="form-label">Headline</label>
            <input type="text" class="form-control" :placeholder="selectedEntry.headline" id="updateHeadline">
          </div>
          <div class="mb-3">
            <label  class="form-label">Entry</label>
            <textarea class="form-control" rows="4" id="updateEntry" :placeholder="selectedEntry.entry" ></textarea>
          </div>
          <button class="brown ui button" @click="updateEntry(selectedEntry.id)">Confirm</button>
        </div>
      </div>
      <div class="col-md-4">
        <EntryList :entries="entries"
                   @entrySelect="onEntrySelect"></EntryList>
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
      selectedId: null,
      update: false,

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
      if(window.confirm("are you sure about deleting?")) {
        this.removeUpdate()
        this.removeSelected()
        return axios.delete(`${ROOT_URL}/entries/` + id)
            .then(
                this.fetchEntries
            )
      }
    },
    updateEntry(id){
      if (window.confirm("are you sure about updating?")) {

        const headline = document.getElementById("updateHeadline").value;
        const entry = document.getElementById("updateEntry").value;

        this.removeUpdate()
        this.removeSelected()
        axios.put(`${ROOT_URL}/entries/` + id, {
          headline, entry
        }).then(
            this.fetchEntries
        )
      }
    },
    onEntrySelect(entry) {
      this.selectedEntry = entry;
    },
    toggleUpdate() {
      this.update = !this.update
    },
    removeSelected() {
      this.selectedEntry = null;
    },
    removeUpdate() {
      if(this.update) this.update = false;
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
  border-radius: 15px;
  background-color: #D7CAAA;
}

.buttons{
  padding: 10px;
}

.detail{
  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 15px;
  background-color: #D7CAAA;
}

.form-control{
  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 15px;
  background-color: #eee1cf;
}
</style>
