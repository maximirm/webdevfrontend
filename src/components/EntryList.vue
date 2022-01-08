<template>

  <ul class="list-group">
    <EntryListItem
    v-for="entry in entries"
    :key="entry.id"
    :entry="entry"
    @entrySelect="onEntrySelect">

    </EntryListItem>

  </ul>

</template>

<script>


import EntryListItem from "./EntryListItem";

export default {
  name: 'EntryList',
  components: {
    EntryListItem
  },
  props: {
    entries: Array
  },
  methods: {
    onEntrySelect(entry) {
      this.$emit('entrySelect', entry);
    }

  }


}

</script>

