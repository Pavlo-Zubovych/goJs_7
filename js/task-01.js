//__1.1
const categoriesList = document.querySelector('#categories');
const countCategories = categoriesList.children.length;
console.log(`В списку ${countCategories} категорій`);

console.log('________________________');

//__1.2
const liItem = document.querySelectorAll('li.item');
// console.log(liItem);
// в псевдо елементі не працює forEch)

for (let i = 0; i < liItem.length; i++) {
  const nameList = liItem[i].firstElementChild.textContent;
  const countItem = liItem[i].lastElementChild.children.length;

  console.log(`* Категорія: ${nameList} 
  Кількість елементів: ${countItem}`);
}
