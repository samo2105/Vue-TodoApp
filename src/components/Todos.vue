<template>
  <div>
    <h2> Double click to complete todo</h2>
    <div v-bind:key="todo.id" v-for="todo in allTodos" class="todos">
      <TodoItem  v-bind:todo="todo"/>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  components: {
    TodoItem
  },
  methods: {
    ...mapActions(['fetchTodos'])
  },
  computed: mapGetters(['allTodos']),
  created () {
    this.fetchTodos()
  }
}
</script>

<style scoped>
  .todos {
    text-align: center;
  }
</style>