<template>
  <base-card>
    <p>Page not found, back to <router-link to="/recipes">recipes</router-link>?</p>
    <img src="../../icons/pizza.png">
  </base-card>
</template>

<style scoped>
p {
  text-align: center;
}

a {
  background-color: #f7f2fa;
  color: blueviolet;
  border: none;
  padding: 0;
  font-size: 20px;
  letter-spacing: 0;
}

img {
  display: block;
  margin: auto;
}
</style>