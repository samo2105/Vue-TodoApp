import axios from 'axios'

const state = {
  todos: []
}

// Usage: Bring data to components
const getters = {
  allTodos: (state) => state.todos
}

// Functions to manipulate state data
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    commit('setTodos', response.data)
  },
  async addTodo({ commit }, title) {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed: false})
    commit('addTodo', response.data)
  },
  async delTodo({ commit }, id) {
    await axios.delete("https://jsonplaceholder.typicode.com/todos/" + id)
    commit('delTodo', id)
  },
  async filterTodos({ commit }, e) {
    const limit =  parseInt(e.target.options[e.target.options.selectedIndex].innerText)
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=" + limit)
    commit('setTodos', response.data)
  },
  async updTodo({ commit }, todo){
    await axios.put("https://jsonplaceholder.typicode.com/todos/" + todo.id, {todo})
    commit('updateTodo', todo)
  }
}

// Mutate state with commit
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => (state.todos.unshift(todo)),
  delTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id != id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}