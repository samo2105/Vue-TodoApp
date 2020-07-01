<template>
  <div id="app">
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from "../components/Todos.vue";
import AddTodo from "../components/AddTodo.vue";
import FilterTodos from "../components/FilterTodos.vue";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

select {
  margin: 20px;
  padding: 6px;
  border: green 1px solid;
}
</style>
