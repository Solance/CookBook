<template>
  <div class="icons">
    <img src="../../../icons/pizza.png" @click="setIcon('pizza.png')"/>
    <img src="../../../icons/pasta.png" @click="setIcon('pasta.png')"/>
    <img src="../../../icons/baked-potato.png" @click="setIcon('baked-potato.png')"/>
    <img src="../../../icons/bread.png" @click="setIcon('bread.png')"/>
    <img src="../../../icons/burger.png" @click="setIcon('burger.png')"/>
    <img src="../../../icons/burrito.png" @click="setIcon('burrito.png')"/>
    <img src="../../../icons/cake-slice.png" @click="setIcon('cake-slice.png')"/>
    <img src="../../../icons/cake.png" @click="setIcon('cake.png')"/>
    <img src="../../../icons/cookies.png" @click="setIcon('cookies.png')"/>
    <img src="../../../icons/fish2.png" @click="setIcon('fish2.png')"/>
    <img src="../../../icons/fish-and-chips.png" @click="setIcon('fish-and-chips.png')"/>
    <img src="../../../icons/fish.png" @click="setIcon('fish.png')"/>
    <img src="../../../icons/hot-dog.png" @click="setIcon('hot-dog.png')"/>
    <img src="../../../icons/instant-noodles.png" @click="setIcon('instant-noodles.png')"/>
    <img src="../../../icons/milkshake.png" @click="setIcon('milkshake.png')"/>
    <img src="../../../icons/oatmeal.png" @click="setIcon('oatmeal.png')"/>
    <img src="../../../icons/omelette.png" @click="setIcon('omelette.png')"/>
    <img src="../../../icons/pancake.png" @click="setIcon('pancake.png')"/>
    <img src="../../../icons/pancakes.png" @click="setIcon('pancakes.png')"/>
    <img src="../../../icons/pie.png" @click="setIcon('pie.png')"/>
    <img src="../../../icons/poke.png" @click="setIcon('poke.png')"/>
    <img src="../../../icons/ramen.png" @click="setIcon('ramen.png')"/>
    <img src="../../../icons/salad.png" @click="setIcon('salad.png')"/>
    <img src="../../../icons/sandwich.png" @click="setIcon('sandwich.png')"/>
    <img src="../../../icons/sandwich1.png" @click="setIcon('sandwich1.png')"/>
    <img src="../../../icons/skewers.png" @click="setIcon('skewers.png')"/>
    <img src="../../../icons/soup.png" @click="setIcon('soup.png')"/>
    <img src="../../../icons/soup1.png" @click="setIcon('soup1.png')"/>
    <img src="../../../icons/steak.png" @click="setIcon('steak.png')"/>
    <img src="../../../icons/sushi.png" @click="setIcon('sushi.png')"/>
    <img src="../../../icons/taco.png" @click="setIcon('taco.png')"/>
    <img src="../../../icons/thai-food.png" @click="setIcon('thai-food.png')"/>
    <img src="../../../icons/question-mark.png" @click="setIcon('question-mark.png')"/>
  </div>
</template>

<script>
export default {
  emits: ['set-icon'],
  methods: {
    setIcon (iconId) {
      this.$emit('set-icon', iconId);
    }
  }
}
</script>

<style scoped>
img {
  width: 44px;
  height: 44px;
  padding: 4px;
  cursor: pointer;
}

img:hover {
  opacity: 0.8;
  transform: scale(1.2);
}

.icons {
  margin: 10px;
}
</style>