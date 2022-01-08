<template>
  <div v-if="entry" >
    <div class="details">
      <h2>{{entry.headline}}</h2>
      <h5>{{entry.creationDate}}</h5>
      <p>{{entry.entry}}</p>




    </div>

  </div>
</template>

<script>



export default {
  name: 'EntryDetail',
  props: ['entry'],


}

</script>

<style scoped>

.details{
  padding: 10px;
  border: 1px solid dimgray;
  border-radius: 4px;
}

</style>
