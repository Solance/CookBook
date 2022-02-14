<template>
    <div class="container">
      <recipes-filter @update-filter="updateFilters"></recipes-filter>
      <base-button>
        <router-link to="/recipes/add">+ ADD</router-link>
      </base-button>
    </div>
</template>


<script>
import RecipesFilter from './RecipesFilter.vue';

export default {
  emits: ['set-filters'],
  components: {
    RecipesFilter,
  },
  methods: {
    updateFilters(filters) {
      this.$emit('set-filters', filters);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-end;
  padding: 10px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 20px;
  max-width: 840px;
}

button,
a {
  white-space: nowrap;
  font-size: 14px;
  letter-spacing: 2px;
}

button:hover,
a:hover {
  transition: all 0.2s;
  opacity: 0.8;
}

</style>