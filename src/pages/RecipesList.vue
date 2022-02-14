<template>
  <recipes-actions @set-filters="setFilters"></recipes-actions>
  <ul>
    <recipe-item v-for="recipe in filteredRecipes" :key="recipe" :recipe="recipe"></recipe-item>
  </ul>
</template>

<script>
import RecipeItem from '../components/recipes/RecipeItem.vue';
import RecipesActions from '../components/recipes/RecipesActions.vue';

export default {
  components: {
    RecipeItem,
    RecipesActions
  },
  data() {
    return {
      filters: {
        vegetarian: false, 
        asian: false,
        mexican: false,
        italian: false,
        indian: false,
        mediterranean: false,
        american: false,
        dessert: false,
        other: false
      }
    }
  },
  inject: ['recipes'],
  computed: {
    filteredRecipes() {
      if (Object.values(this.filters).every(fil => fil === false)) {
        return this.recipes;
      }
      return this.recipes.filter(rec => {
        if (rec.category.includes('Vegetarian') && this.filters.vegetarian) 
          return true;
        if (rec.category.includes('Asian') && this.filters.asian) 
          return true;
        if (rec.category.includes('Mexican') && this.filters.mexican) 
          return true;
        if (rec.category.includes('Italian') && this.filters.italian) 
          return true;   
        if (rec.category.includes('Indian') && this.filters.indian) 
          return true;  
        if (rec.category.includes('Mediterranean') && this.filters.mediterranean) 
          return true;  
        if (rec.category.includes('Dessert') && this.filters.dessert) 
          return true;  
        if (rec.category.includes('American') && this.filters.american) 
          return true; 
        if (rec.category.includes('Other') && this.filters.other) 
          return true; 
        return false;
      })
    }
  },
  methods: {
    setFilters(newFilters) {
      this.filters = newFilters;
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-width: 840px;
  display: block;
  margin: auto;
}
</style>