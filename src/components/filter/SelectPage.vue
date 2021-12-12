<template>
  <div class="row col-md-12">
    <div class="col-md-3"></div>
    <div class="col-md-2">
      <label for="">Choose Page :</label>
    </div>
    <div class="col-md-2">
      <select class="form-control" v-model="page" @change="changePage">
        <option v-for="it in Pages" :key="it" :value="it">{{ it }}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectPage",
  props: {
    pilihPage: Number,
  },
  data() {
    return {
      Pages: {},
      page:1
    };
  },
  methods: {
    countNumberPage() {
      this.axios
        .get("https://reqres.in/api/users?page=1")
        .then((response) => {
          const res = response.data;
          const total = [];
          for (var i = 1; i <= parseInt(res.total_pages); i++) {
            total.push(i);
          }
          this.Pages = total;
        });
    },
    changePage(){
        this.$store.state.pilihHalaman = this.page
        this.$emit('onChangePage', this.page)
    },
  },
  mounted() {
    this.countNumberPage();
  },
};
</script>