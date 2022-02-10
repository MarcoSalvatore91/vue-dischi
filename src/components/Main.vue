<template>
  <section>
      <div v-for="song in songs" :key="song.response">
          <img :src="song.poster" :alt="song.author">
      </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "Main",

    data() {
        return {
            songs: [],
        }
    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
            this.songs = res.data.response;
        });
    }
};

</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';

section {
    height: calc(100vh - 96px);
    background-color: rgb(30,45,59);

    img {
        height: 120px;
    }
}
</style>