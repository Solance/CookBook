<template>
  <li>
    <router-link :to="recipeLink" class="container">
      <div class="img_box">
        <img :src="icon">
      </div>
      <div class="title">
        <div class="title_text">
          <p class="rec_name">{{ recipe.name }}</p>
          <p class="rec_cat">{{ recipe.category.join(', ') }}</p>
        </div>
      </div>
      <div class="details">
        <p><span class="time">Cooking Time: </span><span>{{ recipe.time }}</span></p>
        <p><span class="portions">Portions: </span><span>{{ recipe.portions }}</span></p>
      </div>
      <!-- <router-link :to="recipeLink">SHOW RECIPE</router-link> -->
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['recipe'],
  computed: {
    recipeLink() {
      return '/recipes/' + this.recipe.id;
    },
    icon() {
      if (this.recipe.icon === '') {
        return;
      }
      return require('../../../icons/' + this.recipe.icon);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
} 

p {
  font-size: 16px;
  margin: 0;
}

li {
  background-color: rgb(244, 242, 247);
  margin: 14px auto;
  max-width: 840px;
}

.img_box img {
  margin: 0;
  width: 60px;
  height: 60px;
}

.img_box {
  padding: 25px;
  margin-left: 6px;
}

.title {
  margin-left: 35px;
  flex-grow: 2;
}

.title_text {
  display: inline-block;
  text-align: left;
}

.details {
  margin-right: 30px;
  text-align: left;
  min-width: 250px;
  padding-left: 55px;
}

span {
  color:black;
  font-size: 14px;
  font-weight: 300;
  color: white;
}

.time,
.portions {
  font-weight: 600;
}

.rec_name {
  color: rgb(32, 32, 32);
  font-weight: 300;
  font-size: 22px;
  color: white;
  letter-spacing: 6px;
}

.rec_cat {
  color: rgb(32, 32, 32);
  font-size: 14px;
  font-weight: 200;
  font-style: italic;
  color: white;
}

li a {
  margin: 0;
}

button,
a {
  background: rgb(161,99,218);
  color: blueviolet;
  box-shadow: 2px 2px 0px #771dcb;
}

a:hover {
  transition: all 0.2s;
  transform: scale(1.02);
}

/* li {
  border-bottom: 1px solid black;
  padding-bottom: 30px;
} */

</style>
