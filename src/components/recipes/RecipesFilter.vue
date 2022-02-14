<template>
  <div class="filter">
      <span class="filter-button" :class="{active: filters.vegetarian}">
        <input type="checkbox" id="vegetarian" @change="setFilter"/>
        <label for="vegetarian">VEGETARIAN</label>
      </span>
      <span class="filter-button" :class="{active: filters.asian}">
        <input type="checkbox" id="asian" @change="setFilter"/>
        <label for="asian">ASIAN</label>
      </span>
      <span class="filter-button" :class="{active: filters.mexican}">
        <input type="checkbox" id="mexican" @change="setFilter"/>
        <label for="mexican">MEXICAN</label>
      </span>
      <span class="filter-button" :class="{active: filters.italian}">
        <input type="checkbox" id="italian" @change="setFilter"/>
        <label for="italian">ITALIAN</label>
      </span>
      <span class="filter-button" :class="{active: filters.indian}">
        <input type="checkbox" id="indian" @change="setFilter"/>
        <label for="indian">INDIAN</label>
      </span>
      <span class="filter-button" :class="{active: filters.mediterranean}">
        <input type="checkbox" id="mediterranean" @change="setFilter"/>
        <label for="mediterranean">MEDITERRANEAN</label>
      </span>
      <span class="filter-button" :class="{active: filters.american}">
        <input type="checkbox" id="american" @change="setFilter"/>
        <label for="american">AMERICAN</label>
      </span>
      <span class="filter-button" :class="{active: filters.dessert}">
        <input type="checkbox" id="dessert" @change="setFilter"/>
        <label for="dessert">DESSERT</label>
      </span>
      <span class="filter-button" :class="{active: filters.other}">
        <input type="checkbox" id="other" @change="setFilter"/>
        <label for="other">OTHER</label>
      </span>
    </div>
</template>

<script>
export default {
  emits: ['update-filter'],
  data () {
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
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('update-filter', updatedFilters);
    }
  }
}
</script>

<style scoped>

.filter-button {
  margin-right: 14px;
  background-color: white;
  color: blueviolet;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid blueviolet;
}

.active,
.active:hover {
  background-color: blueviolet;
  color: white;
}

label {
  cursor: pointer;
}

input {
  display: none;
}

span {
  display: inline-block;
  cursor: pointer;
}

span:hover {
  transition: all 0.2s;
  background-color: rgb(243, 225, 255);
}


</style>