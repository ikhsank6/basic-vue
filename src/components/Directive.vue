<template>
  <div v-if="show">Hallo Lagi Coba</div>
  <button @click="ActTitle">Show/Hide</button>
  <h1>Deret Bilangan Ganjil</h1>
  <h4>{{ bilangan }}</h4>
  <button v-on:click="increment">increment</button>
  <button v-on:click="decrement">decrement</button>
  <h1>To Do List</h1>
  <div class="ToDoList" v-if="show">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.task }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Directive",
  props: {
    todos: Array,
  },
  data() {
    return {
      bilangan: 1,
      show: true,
    };
  },
  methods: {
    increment() {
      this.bilangan += 2;
    },
    decrement() {
      this.bilangan -= 2;
    },
    ActTitle() {
      this.show = !this.show;
    },
  },
};
</script>