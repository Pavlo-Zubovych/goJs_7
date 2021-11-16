const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = (ingredient) => {
  const tagLiRef = document.createElement('li');
  tagLiRef.textContent = ingredient;

  const ingredientsList = document.querySelector('#ingredients');
  ingredientsList.appendChild(tagLiRef);
};

ingredients.forEach((ingredient) => createList(ingredient));

//перший варіант

// const ingredientsList = document.querySelector('#ingredients');
// // console.log(ingredients);

// ingredients.forEach(function (ingredient) {
//   const tagLiRef = document.createElement('li');
//   tagLiRef.textContent = ingredient;

//   ingredientsList.appendChild(tagLiRef);

// });
