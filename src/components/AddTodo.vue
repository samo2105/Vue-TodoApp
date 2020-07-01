<template>
  <div class="form">
    <form @submit="newTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    newTodo(e) {
      e.preventDefault();
      this.addTodo(this.title)
      this.title = "";
    }
  }
};
</script>

<style scoped>
.form {
  margin-bottom: 30px;
}
</style>