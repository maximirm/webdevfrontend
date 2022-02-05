<template>
  <div>
    <div class="container">
      <input class="form-control" id="myInput" type="text" placeholder="Search.." @input="onInput">
      <br>
      <ul class="list-group" id="myList">
        <EntryListItem class="item"
            v-for="entry in filteredArray"
            :key="entry.id"
            :entryHead="entry.headline"
            :entryDate="entry.creationDate"
            :entry="entry"
            @entrySelect="onEntrySelect">
        </EntryListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import EntryListItem from "./EntryListItem";

export default {
  name: 'EntryList',
  data() {
    return {
      input: ''
    }
  },
  computed: {
    filteredArray() {
      return this.entries.filter(entry => {
        if (entry.headline !== null && entry.creationDate !== null) {
          return (entry.headline.toLowerCase().includes(this.input)) || (entry.creationDate.includes(this.input));
        }
      })
    }
  },
  components: {
    EntryListItem
  },
  props: {
    entries: Array
  },
  methods: {
    onEntrySelect(entry) {
      this.$emit('entrySelect', entry);
    },
    onInput(event) {
      this.input = event.target.value.toLowerCase();
    }
  },
}


</script>

<style scoped>

.form-control{
  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 15px;
  background-color: #eee1cf;
}

.item{
  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 5px;
  background-color: #D7CAAA;
}

.list-group {
  max-height: 300px;
  margin-bottom: 10px;
  overflow:scroll;
  -webkit-overflow-scrolling: touch;
}

</style>

