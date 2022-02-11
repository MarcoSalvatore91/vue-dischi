<template>
  <div>
    <Header :songs="songs" />
    <Loaders v-if="isLoading"/>
    <Main v-else :songs="songs" />
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
    },

    mounted() {
        this.getSong();
    },
};
</script>

<style scoped lang="scss">


</style>
