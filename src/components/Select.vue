<template>
  <div class="me-3">
      <select>
          <option v-for='option in options' :key="option"
          @click="$emit('search')"
          >{{ option }}</option>
      </select>
  </div>
</template>

<script>
export default {
    name: 'Select',

    data() {
        return {
            options: ['--', 'Rock', 'Pop', 'Jazz', 'Metal'],
        }        
    }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';

div {
    line-height: 80px;
}
</style>