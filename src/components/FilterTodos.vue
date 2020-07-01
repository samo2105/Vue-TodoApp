<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)" >
      <option value="200">200</option>
      <option value="150">150</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="25">25</option>
      <option value="10">10</option>
      <option value="10">5</option>
      <option value="10">1</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FilterTodos',
  methods: {
    ...mapActions(['filterTodos']),
  }
}
</script>

<style>

</style>