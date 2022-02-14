import { createRouter, createWebHistory } from 'vue-router';
import RecipesList from './pages/RecipesList.vue';
import NewRecipeForm from './components/recipes/NewRecipeForm.vue';
import RecipeDetails from './components/recipes/RecipeDetails.vue';
import FavoriteRecipes from './pages/FavoriteRecipes.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/recipes'},
    {path: '/recipes', component: RecipesList, props:true},
    {path: '/recipes/add', component: NewRecipeForm},
    {path: '/recipes/:recipeId', component: RecipeDetails,},
    {path: '/favorites', component: FavoriteRecipes},
    {path: '/:notFound(.*)', component: NotFound}
  ]
});

export default router;