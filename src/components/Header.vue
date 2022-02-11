<template>
  <header>
    <div class="head">
      <img src="../assets/img/unnamed.png" alt="Logo">
      <Select />
    </div>
  </header>
</template>

<script>
import Select from './Select.vue'

export default {
  name: "Header",
  props: {
    
  },
  components: {
    Select,
  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';

  .head {
    background-color: $bgc_grey;

    img {
      height: 80px;
      padding: 10px 20px;
    }
  }
</style>
