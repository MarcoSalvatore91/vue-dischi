<template>
  <section>
    <div>
        <div class="container row">
            <div class="card-song text-center" v-for="song in filtredAlbums" :key="song.response">
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
import Card from './Card.vue'

export default {
    name: "Main",
    components: {
        Card,
    },

    props: ['songs', 'newArr'],

    computed: {
        filtredAlbums() {
            const filtredAlbum = this.newArr;
            return this.songs.filter((song) => {
                if(filtredAlbum === song.genre || filtredAlbum === 'All' || filtredAlbum === '') {
                    return true
                }
            })
        }
        
    },
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