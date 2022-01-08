<template>
  <li class="list-group-item d-flex justify-content-between align-items-center"
  @click="onEntrySelect">
    {{entry.headline}}
    <span class="badge bg-secondary">{{entry.creationDate}}</span>



  </li>

</template>


<script>

export default {
  name: 'EntryListItem',
  props: ['entry'],
  methods: {
    onEntrySelect() {
      this.$emit('entrySelect', this.entry);
    }

  }

}

</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover{
  background-color: #eee;
}
</style>

