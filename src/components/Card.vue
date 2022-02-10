<template>
  <div>
    <img :src="poster" :alt="author">
    <h4>{{ title }}</h4>
    <div class="grey">{{ author }}</div>
    <div class="grey">{{ year }}</div>
  </div>
</template>

<script>

export default {
    name: 'Card',
    props: ["poster", "author", "title", "year"],
}
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';

    img {
        width: 120px;
    }

    h4 {
        margin-top: 10px;
        color: white;
    }

    .grey {
      color: $color_grey;
    }

</style>