<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <Example msg="coba" angka="3" pesan="lagi nyobain nih" />
  <Directive :todos="todos" />
  <SelectPage @onChangePage="onClickChild" />
  <ConsumeAPI :page="page" />
</template>

<script>
import Example from "./components/Example.vue";
import Directive from "./components/Directive.vue";
import ConsumeAPI from "./components/ConsumeAPI.vue";
import SelectPage from "./components/filter/SelectPage.vue";

export default {
  name: "App",
  components: {
    Example,
    Directive,
    ConsumeAPI,
    SelectPage,
  },
  data() {
    return {
      todos: [
        { id: 1, task: "todo 1", finished: false },
        { id: 2, task: "todo 2", finished: true },
        { id: 3, task: "todo 3", finished: false },
        { id: 4, task: "todo 4", finished: true },
        { id: 5, task: "todo 5", finished: false },
      ],
      page: 1,
    };
  },
  methods: {
    onClickChild(value) {
      this.page = value
      
    },
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
</style>
