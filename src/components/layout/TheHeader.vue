<template>
  <header>
    <nav>
      <router-link to="/recipes"><img class="logo" src="../../../logo.png"></router-link>
      <ul class="nav-btn">
        <li>
          <router-link to="/recipes">RECIPES</router-link>
        </li>
        <li>
          <router-link to="/favorites">FAVORITES</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 140px;
  background-color: blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  letter-spacing: 2px;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
}

.nav-btn a:active,
.nav-btn a.router-link-active {
  font-weight: bold;
  border: 1px solid white;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.logo {
  width: 70px;
  height: 70px;
}


</style>