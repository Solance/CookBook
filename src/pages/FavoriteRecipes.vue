<template>
    <ul>
      <recipe-item v-for="fav in favorites" :key="fav" :recipe="fav"></recipe-item>
    </ul>
    <base-card v-if="favorites.length === 0">
      <p>You have no favorite recipes yet.</p>
      <img src="../../icons/wedding-dinner.png">
    </base-card>
</template>


<script>
import RecipeItem from '../components/recipes/RecipeItem.vue'
export default {
  components: { RecipeItem },
  inject: ['favorites']
}
</script>


<style scoped>
p {
  text-align: center;
}

img {
  display: block;
  margin: auto;
}
</style>