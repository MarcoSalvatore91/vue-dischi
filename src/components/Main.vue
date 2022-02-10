<template>
  <section>
    <div>
        <Loaders v-if="isLoading"/>
        <div v-else class="container row">
            <div class="card-song text-center" v-for="song in songs" :key="song.response">
                <Card :poster="song.poster"
                :author="song.author"
                :title="song.title"
                :year="song.year" />
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Card from './Card.vue'
import Loaders from './Loaders.vue'

export default {
    name: "Main",
    components: {
        Card,
        Loaders,
    },

    data() {
        return {
            isLoading: false,
            songs: [],
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
        margin: 15px 20px;
    }

}
</style>