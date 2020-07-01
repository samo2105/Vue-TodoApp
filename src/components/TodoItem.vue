<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
    <p>
      <input type='checkbox' v-on:change="markComplete">
      {{ todo.title }}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: whitesmoke;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    margin: 5px;
    display: inline-block;
    width: 40%;
    -webkit-box-shadow: 10px 10px 20px -13px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 20px -13px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 20px -13px rgba(0,0,0,0.75);
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: red;
    color: white;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>