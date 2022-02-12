<template>
  <div>
    <Header :songs="songs" @search="filtredSong"/>
    <Loaders v-if="isLoading"/>
    <Main v-else :songs="songs" :newArr="newArr"/>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue'
import Loaders from './components/Loaders.vue'


export default {
  name: "App",
  components: {
    Header,
    Main,
    Loaders,

  },

  data() {
      return {
          songs: [],
          isLoading: false,
          newArr: '',
      }
    },

    methods: {
      
        getSong() {
            this.isLoading = true,
            axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
                this.songs = res.data.response;
                this.isLoading = false;
            });
        }, 

        filtredSong(item) {
          this.newArr = item;
        }
      
    },

    mounted() {
        this.getSong();
    },
};
</script>

<style scoped lang="scss">


</style>
