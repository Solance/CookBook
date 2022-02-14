<template>
  <base-card>
    <h2>Add Recipe</h2>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{invalid: !name.isValid}">
        <h5>Recipe Name</h5>
        <input type="text" id="rec-name" v-model.trim="name.val" @blur="clearValidity('name')"/>
        <p v-if="!name.isValid">Please enter a recipe name</p>
      </div>
      <div class="form-control icon" :class="{invalid: !icon.isValid}">
        <base-button type="button" @click="toggleIconSelection">CHOOSE ICON</base-button>
        <p v-if="!icon.isValid">Please choose an icon</p>
        <img v-if="selectedIcon !== ''" :src="selectedIcon" @blur="clearValidity('icon')">
        <select-icon v-if="iconsVisible" @set-icon="selectIcon"></select-icon>
      </div>
      <section>
        <div class="form-control category" :class="{invalid: !category.isValid}">
          <h5>Category</h5>
          <div>
            <input type="checkbox" id="vegetarian" value="Vegetarian" v-model="category.val" @blur="clearValidity('category')">
            <label for="vegetarian">Vegetarian</label>
          </div>
          <div>
            <input type="checkbox" id="asian" value="Asian" v-model="category.val" @blur="clearValidity('category')">
            <label for="asian">Asian</label>
          </div>
          <div>
            <input type="checkbox" id="mexican" value="Mexican" v-model="category.val" @blur="clearValidity('category')">
            <label for="mexican">Mexican</label>
          </div>
          <div>
            <input type="checkbox" id="italian" value="Italian" v-model="category.val" @blur="clearValidity('category')">
            <label for="italian">Italian</label>
          </div>
          <div>
            <input type="checkbox" id="indian" value="Indian" v-model="category.val" @blur="clearValidity('category')">
            <label for="indian">Indian</label>
          </div>
          <div>
            <input type="checkbox" id="mediterranean" value="Mediterranean" v-model="category.val" @blur="clearValidity('category')">
            <label for="mediterranean">Mediterranean</label>
          </div>
          <div>
            <input type="checkbox" id="american" value="American" v-model="category.val" @blur="clearValidity('category')">
            <label for="american">American</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" value="Dessert" v-model="category.val" @blur="clearValidity('category')">
            <label for="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="other" value="Other" v-model="category.val" @blur="clearValidity('category')">
            <label for="other">Other</label>
         </div>
         <p v-if="!category.isValid">Please choose at least one category</p>
        </div>
        <div class="container">
            <div class="form-control time" :class="{invalid: !time.isValid}">
              <h5>Cooking Time</h5>
              <div class="time">
                <input type="number" id="hours" min="0" v-model.trim="hours.val" @blur="clearValidity('time')"/><span>Hours</span> 
              </div>
              <div class="time">
                <input type="number" id="minutes" step="5" min="0" v-model.trim="minutes.val" @blur="clearValidity('time')"/><span>Minutes</span>
              </div>
              <p v-if="!time.isValid">Please choose cooking time</p>
            </div>
            <div class="form-control portions">
              <h5>Portions</h5>
              <input type="range" step="1" id="portions" min="1" max="20" v-model.trim="portions.val" />
              <output>{{ portions.val }}</output>
            </div>
        </div>
      </section>
      <div class="form-control" :class="{invalid: !ingredients.isValid}">
        <h5>Ingredients</h5>
        <textarea rows="4" id="ingredients" v-model.trim="ingredients.val" @blur="clearValidity('ingredients')"></textarea>
        <p v-if="!ingredients.isValid">Please enter some ingredients</p>
      </div>
      <div class="form-control" :class="{invalid: !instructions.isValid}">
        <h5>Instructions</h5>
        <textarea rows="6" id="instructions" v-model.trim="instructions.val" @blur="clearValidity('instructions')"></textarea>
        <p v-if="!instructions.isValid">Please enter some cooking instructions</p>
      </div>
      <button class="save">SAVE</button>
    </form>
  </base-card>
</template>

<script>
import SelectIcon from './SelectIcon.vue';
import { uuid } from 'vue-uuid';

export default {
  components: {
    SelectIcon
  },
  emits: ['save-data'],
  data() {
    return {
      selectedIcon: '',
      iconsVisible: false,
      recipeSaved: false,
      name: {
        type: String,
        val: '',
        isValid: true
      },
      icon: {
        type: String,
        val: '',
        isValid: true
      },
      category: {
        type: Array,
        val:[],
        isValid: true
      },
      hours: {
        type: Number,
        val: 0,
        isValid: true
      },
      minutes: {
        type: Number,
        val: 0,
        isValid: true
      },
      time: {
        type: Number,
        val: null,
        isValid: true
      },
      portions: {
        type: Number,
        val: 1,
        isValid: true
      },
      ingredients: {
        type: String,
        val: '',
        isValid: true
      },
      instructions: {
        type: String,
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.icon.val === undefined || this.icon.val === '') {
        this.icon.isValid = false;
        this.formIsValid = false;
      }
      if (this.category.val.length <= 0) {
        this.category.isValid = false;
        this.formIsValid = false;
      }
      if (this.minutes.val === 0 && this.hours.val === 0) {
        this.time.isValid = false;
        this.formIsValid = false;
      }
      if (this.ingredients.val === '' ) {
        this.ingredients.isValid = false;
        this.formIsValid = false;
      }
      if (this.instructions.val === '') {
        this.instructions.isValid = false;
        this.formIsValid = false;
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    selectIcon(iconName) {
      this.icon.val = iconName;
      this.iconsVisible = false;
      this.selectedIcon = require('../../../icons/' + this.icon.val);
      this.icon.isValid = true;
    },
    submitForm() {
      this.validateForm();
      this.recipeSaved = true;
      if (!this.formIsValid) {
        return;
      }
      const newRecipeData = {
          id: uuid.v1(),
          name: this.name.val.toUpperCase(),
          icon: this.icon.val,
          category: this.category.val,
          time: this.hours.val + ' hrs ' + this.minutes.val + ' mins',
          portions: this.portions.val,
          ingredients: this.ingredients.val,
          instructions: this.instructions.val
      };
      fetch(`https://cook-book-8ddb7-default-rtdb.europe-west1.firebasedatabase.app/recipes/${newRecipeData.id}.json`, {
        method: 'PUT',
        body: JSON.stringify(newRecipeData)
      });
      this.$emit('save-data', newRecipeData);
      this.$router.replace('/recipes');
    },
    toggleIconSelection() {
      this.iconsVisible = !this.iconsVisible;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('before leave');
    console.log(to, from);
    if (this.recipeSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Changes are unsaved, are you sure you want to leave?');
      next(userWantsToLeave);
    }
    
  }
}
</script>


<style scoped>

p {
  font-size: 12px;
  margin: 3px;
}

.form-control {
  margin: 0.5rem 0;
  font-size: 18px;
  flex-grow: 0.5;
}

.icon {
  display: flex;
  align-items: flex-start;
  align-content: flex-end;
  flex-wrap: wrap;
}

.icon button {
  margin-top: 5px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.portions {
  text-align: center;
}

.category label {
  font-size: 16px;
  font-weight: bold;
}

section {
  display: flex;
  align-items: baseline;
}

.time {
  display: inline-block;
  text-align: center;
 }

.time input {
  width: 40px;
  margin: 5px;
}

img {
  width: 40px;
  height: 40px;
  margin-top: 0;
}

.time span {
  font-size: 14px;
}

label {
  display: block;
  margin-bottom: 4px;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

output {
  align-items: center;
}

.save {
  margin-left: 91%;
  margin-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

h5 {
  margin: 4px;
}

.invalid p {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>