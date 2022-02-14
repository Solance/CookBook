<template>
  <the-header></the-header>
  <router-view @save-data="addRecipe" @favorite-recipe="addFavorite" @delete-recipe="deleteRec"></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  provide() { 
    return {
      recipes: this.recipes,
      favorites: this.favorites
    }
  },
  data() {
    return {
      recipes: [
        {
          id: 'r1',
          name: 'PASTA CARBONARA',
          category: ['Italian'],
          icon: 'pasta.png',
          time: '30 mins',
          portions: 4,
          ingredients: '\
450g spaghetti \n\
220g bacon \n\
4 eggs \n\
1 tabelspoon extra virgin olive oil \n\
2 garlic cloves, 1 cup grated Parmesan \n\
salt and black pepper to taste',
          instructions: '\
1. Heat pasta water: Put a large pot of salted water on to boil \n\
2. Sauté bacon and garlic: While the water is coming to a boil, heat the olive oil or butter in a large sauté pan over medium heat. \
Add the bacon and cook slowly until crispy. Add the garlic and cook another minute \n\
3. Beat eggs and half of the cheese: In a small bowl, beat the eggs and mix in about half of the cheese. \n\
4. Cook pasta: Once the water has reached a rolling boil, add the dry pasta, and cook, uncovered, at a rolling boil. \n\
5. Toss pasta with pancetta/bacon: When the pasta is al dente (still a little firm, not mushy), \
use tongs to move it to the bowl with the bacon and garlic. Let it be dripping wet. \
Reserve some of the pasta water. Move the pasta from the pot to the bowl quickly, as you want the pasta to be hot. \
Its the heat of the pasta that will heat the eggs sufficiently to create a creamy sauce. \
Toss everything to combine, allowing the pasta to cool just enough so that it doesnt make the eggs curdle when you mix them in. \n\
6. Add the beaten egg mixture: Add the beaten eggs with cheese and toss quickly to combine once more. Add salt to taste. \
Add some pasta water back to the pasta to keep it from drying out. \
Serve at once with the rest of the parmesan and freshly ground black pepper. \
If you want, sprinkle with a little fresh chopped parsley.'
        },
        {
          id: 'r2',
          name: 'BURRITO',
          category: ['Mexican'],
          icon: 'taco.png',
          time: '1 hour',
          portions: 6,
          ingredients: '\
450g ground beef \n\
1 bag taco seasoning mix \n\
1½ cups black beans \n\
1 can corn \n\
3 cups coocked rice \n\
6 large flour tortillas \n\
1½ cups shredded cheese \n\
optional garnish: finely diced red onion; lettuce; diced tomato or salsa; sour cream; fresh cilantro; avocado or guacamole',
          instructions: '\
1. Preheat oven to 175°C. Spray 22 x 33-cm baking dish with cooking spray and set aside. \n\
2. Cook beef with taco seasoning mix, according to seasoning package instructions. \n\
3. To prepare 1 burrito: spread ¼ cup beans down center of tortillas; \
top with ½ cup rice, beef, 2 tablespoons corn, and ¼ cup cheese. \n\
4. Fold in opposite sides of each tortilla, then roll up, burrito style. \
Place, seam-sides down, in prepared dish. Repeat with remaining ingredients to prepare 6 total burritos. \n\
5. Cover with foil and bake for 25 minutes (until heated through). \
If you are baking the burritos from the refrigerator while they’re still cold, it will take about 30-35 minutes for them to heat through.'
        },
        {
          id: 'r3',
          name: 'PIZZA',
          category: ['Italian'],
          icon: 'pizza.png',
          time: '35 mins',
          portions: 4,
          ingredients: '\
300g bread flour \n\
1 tsp instant yeast \n\
1 tsp salt \n\
1 tbsp olive oil \n\
100ml passata \n\
handful fresh basil or 1 tsp dried \n\
1 crushed garlic clove \n\
125g sliced ball mozzarella \n\
handful grated or shaved parmesan \n\
handful of halved cherry tomatoes',
          instructions: '\
1. Make the base: Put the flour into a large bowl, then stir in the yeast and salt. \
Make a well, pour in 200ml warm water and the olive oil and bring together with a wooden spoon \
until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. \
Cover with a tea towel and set aside. You can leave the dough to rise if you like, but it’s not essential for a thin crust. \n\
2. Make the sauce: Mix the passata, basil and crushed garlic together, then season to taste. \
Leave to stand at room temperature while you get on with shaping the base. \n\
3. Roll out the dough: if you’ve let the dough rise, give it a quick knead, then split into two balls. \
On a floured surface, roll out the dough into large rounds, about 25cm across, using a rolling pin. \
The dough needs to be very thin as it will rise in the oven. Lift the rounds onto two floured baking sheets. \n\
Top and bake: heat the oven to 240C. Put another baking sheet or an upturned baking tray in the oven on the top shelf. \
Smooth sauce over bases with the back of a spoon. Scatter with cheese and tomatoes, drizzle with olive oil and season. \
Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. \
Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using. \
Repeat step for remaining pizza.'
        },
        {
          id: 'r4',
          name: 'CHOCOLATE CAKE',
          category: ['Dessert'],
          icon: 'cake.png',
          time: '1 hour',
          portions: 12,
          ingredients: '\
2 cups white sugar \n\
1¾ cups all-purpose flour \n\
¾ cup unsweetened cocoa powder \n\
1½ teaspoons baking powder \n\
1½ teaspoons baking soda \n\
1 teaspoon salt \n\
2 eggs \n\
1 cup milk \n\
½ cup vegetable oil \n\
2 teaspoons vanilla extract \n\
1 cup boiling water',
          instructions: '\
1. Preheat oven to 175°C. Grease and flour two nine inch round pans.\n\
2. In a large bowl, stir together the sugar, flour, cocoa, baking powder, baking \
soda and salt. Add the eggs, milk, oil and vanilla, mix for 2 minutes on medium \
speed of mixer. Stir in the boiling water last. Batter will be thin. Pour evenly \
into the prepared pans. \n\
3. Bake 30 to 35 minutes in the preheated oven, until the cake tests done with a \
toothpick. Cool in the pans for 10 minutes, then remove to a wire rack to cool completely.'
        }
      ],
      favorites: []
    }
  },
  methods: {
    addRecipe(recipe) {
      this.recipes.unshift(recipe);
    },
    addFavorite(recipe) {
      const recIndex = this.favorites.findIndex( rec => rec.id === recipe.id);
      if (recIndex === -1) {
        this.favorites.unshift(recipe);
      }
    },
    deleteRec(recipe) {
      const recId = recipe.id;
      const recIndex = this.recipes.findIndex( rec => rec.id === recId);
      this.recipes.splice(recIndex, 1);
    }
  },
  mounted() {
    fetch('https://cook-book-8ddb7-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').then((response) => {
        if(response.ok) {
          return response.json();
        }
      }
    ).then((data) => {
      for (const id in data)
        this.recipes.unshift(data[id]);
    });
  }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap');

li {
  list-style-type: none;
}

body {
  font-family: 'Poppins', sans-serif;
  margin-bottom: 50px;
  background-color: #f7f2fa;
}

img {
  width: 50px;
  height: 50px;
  margin-top: 6px;
  margin-left: 10px;
}

p {
  font-weight: 300;
}
</style>