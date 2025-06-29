import recipes from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  let html = '';
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  return html;
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}


function recipeTemplate(recipe) {
  return `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}" width="400" height="300">
      <div class="recipe-details">
        <div class="tag">${recipe.tags[0]}</div>
        <h2>${recipe.name}</h2>
        <p class="rating">${ratingTemplate(recipe.rating)}</p>
        <p class="description">${recipe.description}</p>
      </div>
    </div>
  `;
}

function renderRecipes(recipeList) {
  const recipesContainer = document.getElementById('recipes');
  let html = '';
  recipeList.forEach(recipe => {
    html += recipeTemplate(recipe);
  });
  recipesContainer.innerHTML = html;
}

function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const descMatch = recipe.description.toLowerCase().includes(query);
    const tagMatch = recipe.tags.find(tag => tag.toLowerCase().includes(query));
    const ingredientMatch = recipe.recipeIngredient.find(ingredient =>
      ingredient.toLowerCase().includes(query)
    );
    return nameMatch || descMatch || tagMatch || ingredientMatch;
  });

  filtered.sort((a, b) => a.name.localeCompare(b.name));
  return filtered;
}

function searchHandler(event) {
  event.preventDefault();

  const input = document.querySelector('#searchForm input');
  const query = input.value.toLowerCase();

  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

init();

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', searchHandler);

