<template>
  <li class="list-group-item d-flex justify-content-between align-items-center"
  @click="onEntrySelect">
    {{createHeadline}}
    <span class="badge bg-secondary">{{createCreationDate}}</span>



  </li>

</template>


<script>

export default {
  name: 'EntryListItem',
  props: ['entryHead', 'entryDate','entry'],
  computed: {
    createHeadline() {
      return this.entryHead
    },
    createCreationDate() {
      return this.entryDate
    }
  },
  methods: {
    onEntrySelect() {
      this.$emit('entrySelect', this.entry);
    }
  },
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

