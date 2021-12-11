<template>
  <h1 class="text-danger">Consume API</h1>
  <h4>Page : {{ Page }}</h4>
  <div class="col-md-12">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Email</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dat in datas" :key="dat.id">
          <td><img :src="dat.avatar" alt="" /></td>
          <td>{{ dat.email }}</td>
          <td>{{ dat.first_name }}</td>
          <td>{{ dat.last_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ConsumeAPI",
  data() {
    return {
      datas: null,
      Page: null,
    };
  },
  methods: {
    getList(page) {
      this.axios
        .get("https://reqres.in/api/users?page=" + page)
        .then((response) => {
          const res = response.data;
          this.datas = res.data;
        });
      this.Page = page;
      console.log(page)
    },
  },
  mounted() {
    this.getList(this.$store.getters.pilihHalaman);
  },
};
</script>