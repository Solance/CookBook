<template>
  <button>
    <slot></slot>
  </button>
</template>

<style>
button,
a {
  text-decoration: none;
  padding: 10px;
  background-color: blueviolet;
  border: 0px solid blueviolet;
  color: white;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 2px;
}

a:hover,
button:hover {
  transition: all 0.2s;
  opacity: 0.8;
}




</style>