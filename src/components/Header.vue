<template>
  <header>
    <div class="head d-flex justify-content-between">
      <img src="../assets/img/unnamed.png" alt="Logo" />
      <Select @search="searchSong" :songs="songs"/>
    </div>
  </header>
</template>

<script>
import Select from "./Select.vue";

export default {
  name: "Header",
  props: ["songs"],
  components: {
    Select,
  },

  methods: {
    searchSong(item) {
      this.$emit("search", item)
    }
  },

};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.head {
  background-color: $bgc_grey;

  img {
    height: 80px;
    padding: 10px 20px;
  }
}
</style>
