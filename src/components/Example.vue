<template>
  <h1>Hello World</h1>
  <h4>Project Vue Pertama Saya</h4>
  <h4>Nama Saya {{ nama }}</h4>
  <h4>Umur Saya {{ umur }} tahun</h4>
  <h4> {{ msg }} {{ angka }}</h4>
  <h4>{{ pesan }}</h4>
</template>
<script>
export default {
  name: "Example",
  props: {
    msg: String,
    angka:String,
    pesan:String,
  },
  data() {
    return {
      nama: "ikhsan kurniawan",
      umur: 17,
    };
  },
  mounted() {
    this.umur = this.umur + 3;
  },
};
</script>
