<template>
  <section>
      <div class="container row">
        <div class="card-song text-center" v-for="song in songs" :key="song.response">
            <img :src="song.poster" :alt="song.author">
            <h4 class="white">{{ song.title }}</h4>
            <div class="white">{{ song.author }}</div>
            <div class="white">{{ song.year }}</div>
        </div>
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

    .card-song {
        width: 150px;
        padding: 10px 10px 20px 10px;
        background-color: $bgc_grey;
        margin: 10px 20px;

        img {
            width: 120px;
        }

        h4 {
            margin-top: 10px;
        }
    }

}
</style>