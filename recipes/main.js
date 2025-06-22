import recipes from './recipes.mjs';

const recipesContainer = document.getElementById('recipes');

recipes.forEach(recipe => {
  const card = document.createElement('div');
  card.classList.add('recipe-card');

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" width="400" height="300">
    <div class="recipe-details">
      <div class="tag">${recipe.tags[0]}</div>
      <h2>${recipe.name}</h2>
      <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${generateStars(recipe.rating)}
      </span>
      <p class="description">${recipe.description}</p>
    </div>
  `;

  recipesContainer.appendChild(card);
});

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  return '⭐'.repeat(fullStars) + '☆'.repeat(emptyStars);
}
