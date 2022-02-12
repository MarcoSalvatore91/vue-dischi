<template>
  <div class="me-3">
      <select @change="$emit('search', song)" v-model='song'>
          <option value="All">All</option>
          <option v-for='(song, index) in singleGenre' :key="index" :value="song"
          >{{ song }}</option>
      </select>
  </div>
</template>

<script>
export default {
    name: "Select",
    props: ["songs"],

    computed: {
        singleGenre() {
            const genres = []; 
                this.songs.forEach((type) => {
                    if(!genres.includes(type.genre)) {
                        genres.push(type.genre)
                    }
            })
            return genres     
        }
    },
}
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';

div {
    line-height: 80px;
}
</style>