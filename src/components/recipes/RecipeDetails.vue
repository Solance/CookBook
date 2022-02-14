<template>
  <base-card class="not-found" v-if="recipe === null">
    <p>Recipe not found, back to <router-link to="/recipes">recipes</router-link>?</p>
    <img src="../../../icons/pizza.png">
  </base-card>
  <base-card class="recipe" v-if="recipe !== null">
    <li>
     <div class="container">
        <img :src="icon">
        <p>{{ recipe.name }}</p>
        <span class="category">{{ recipe.category.join(', ') }}</span>
      </div>
      <div><span class="title">Cooking Time:</span><span>{{ recipe.time }}</span></div>
      <div><span class="title">Portions:</span><span>{{ recipe.portions }}</span></div>
      <h4>ingredients:</h4>
      <p class="ingredients">{{ recipe.ingredients }}</p>
      <h4>Cooking Instructions:</h4>
      <p class="instructions">{{ recipe.instructions }}</p>
    </li>
    <div class="actions">
      <base-button @click="addToFavorites">+ FAVORITES</base-button>
      <base-button class="delete" @click="deleteRecipe">DELETE RECIPE</base-button>
    </div>
  </base-card>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
  emits: ['favorite-recipe', 'delete-recipe'],
  components: { BaseButton },
  inject: ['recipes'],
  computed: {
    recipe() {
      for (const rec of this.recipes) {
        const id = this.$route.params.recipeId;
        if (rec.id === id) {
          return rec;
        }
      }
      return null;
    },
   icon() {
      if (this.recipe.icon === '') {
        return;
      }
      return require('../../../icons/' + this.recipe.icon);
    }
  },
  methods: { 
    deleteRecipe() {
      fetch(`https://cook-book-8ddb7-default-rtdb.europe-west1.firebasedatabase.app/recipes/${this.recipe.id}.json`, {
        method: 'DELETE'
      });
      this.$emit('delete-recipe', this.recipe);
      this.$router.replace('/recipes');
    },
    addToFavorites() {
      this.$emit('favorite-recipe', this.recipe);
      this.$router.replace('/favorites');
    } 
  }
}
</script>

<style scoped>

.recipe.card {
  background-color: white;
}

li {
  font-size: 16px;
}

span {
  font-weight: 300;
  margin-right: 5px;
}

.instructions,
.ingredients {
  white-space: pre-wrap;
}

img {
  margin-left: 0;
  width: 50px;
  height: 50px;
}

.title {
  font-weight: 500;
}

.actions {
  text-align: right;
}

.delete {
  background-color: rgb(240, 229, 248);
  color: blueviolet;
  margin-left: 6px;
}

.delete:hover {
  background-color: rgb(232, 207, 248);
}

.container {
  margin-bottom: 30px;
}

.container p {
  color: rgb(32, 32, 32);
  font-weight: 300;
  font-size: 22px;
  letter-spacing: 4px;
  margin-bottom: 0;
  margin-top: 5px;
}

.category {
  color: rgb(32, 32, 32);
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
}

h4 {
  margin-bottom: 0;
  margin-top: 20px;
}

p {
  margin-top: 5px;
}

.not-found p {
  text-align: center;
}

.not-found a {
  background-color: #f7f2fa;
  color: blueviolet;
  border: none;
  padding: 0;
  font-size: 20px;
  letter-spacing: 0;
}

.not-found img {
  display: block;
  margin: auto;
}
</style>