<template>
  <header>
    <div class="head">
      <img src="../assets/img/unnamed.png" alt="Logo">
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    
  },
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
