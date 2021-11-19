const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallaryRef = document.querySelector('#gallery');
const createGallery = images.reduce((totalString, element) => {
  return (totalString += `<li><img src="${element.url}" alt="${element.alt}"/></li>`);
}, '');
gallaryRef.insertAdjacentHTML('afterbegin', createGallery);

// console.log(images[0].alt);

// const createItemGalery = (image) => {
//   const containerLiRef = document.createElement('li');

//   const imageRef = document.createElement('img');
//   imageRef.setAttribute('src', `'${image.url}'`);
//   imageRef.setAttribute('alt', `'${image.alt}'`);

//   console.log(imageRef); // <img src="https://placeimg.com/640/480/nature" alt="nature">

//   return containerLiRef;
// };

// const ItemGalery = images.map((image) => createItemGalery(image));
// // console.loge(ItemGalery);

// const galleryRef = document.querySelector('#gallery');
// console.log(galleryRef);

// galleryRef.append(...ItemGalery);
