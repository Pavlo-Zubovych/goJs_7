const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const createList = (ingredient) => {
//   const tagLiRef = document.createElement('li');
//   tagLiRef.textContent = ingredient;

//   const ingredientsList = document.querySelector('#ingredients');
//   ingredientsList.appendChild(tagLiRef);
// };

// ingredients.forEach((ingredient) => createList(ingredient));

// Варіант V

const ingredientsUlRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientsLiRef = document.createElement('li');
  ingredientsLiRef.textContent = ingredient;
  return ingredientsLiRef;
});

ingredientsUlRef.append(...ingredientsList);

//перший варіант

// const ingredientsList = document.querySelector('#ingredients');
// // console.log(ingredients);

// ingredients.forEach(function (ingredient) {
//   const tagLiRef = document.createElement('li');
//   tagLiRef.textContent = ingredient;

//   ingredientsList.appendChild(tagLiRef);

// });
