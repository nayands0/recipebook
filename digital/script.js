
let recipes = [
    {
      name: 'Pasta Carbonara',
      ingredients: ['Spaghetti', 'Eggs', 'Guanciale', 'Parmesan Cheese', 'Black Pepper'],
      image: 'https://example.com/pasta_carbonara.jpg'
    },
    {
      name: 'Chicken Stir-Fry',
      ingredients: ['Chicken Breast', 'Bell Peppers', 'Broccoli', 'Soy Sauce', 'Garlic', 'Ginger'],
      image: 'https://example.com/chicken_stir_fry.jpg'
    },

  ];
  
  function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = '';
  
    recipes.forEach(recipe => {

      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
  
      const recipeName = document.createElement('h2');
      recipeName.textContent = recipe.name;
  
      const recipeImg = document.createElement('img');
      recipeImg.src = recipe.image;
      recipeImg.alt = recipe.name;
  
      const ingredientsList = document.createElement('ul');
      recipe.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
      });

      recipeCard.appendChild(recipeName);
      recipeCard.appendChild(recipeImg);
      recipeCard.appendChild(ingredientsList);
      recipesContainer.appendChild(recipeCard);
    });
  }
  function searchRecipes() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.join(',').toLowerCase().includes(searchTerm)
    );
  
    displayRecipes(filteredRecipes);
  }
  function addRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const recipeImage = document.getElementById('recipeImage').value;
    const recipeIngredients = document.getElementById('recipeIngredients').value.split(',');
  
    const newRecipe = {
      name: recipeName,
      image: recipeImage,
      ingredients: recipeIngredients.map(ingredient => ingredient.trim()),
    };
  
    recipes.push(newRecipe);
    displayRecipes(recipes);
    document.getElementById('recipeName').value = '';
    document.getElementById('recipeImage').value = '';
    document.getElementById('recipeIngredients').value = '';
  } 
  document.addEventListener('DOMContentLoaded', function() {
    displayRecipes(recipes);
  });
  