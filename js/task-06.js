// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
#validation-input {
  border: 3px solid #bdbdbd;
}
#validation-input.valid {
  border-color: #4caf50;
}
#validation-input.invalid {
  border-color: #f44336;
} */

const inputRef = document.querySelector('#validation-input');

const checkInput = (event) => {
  // перевірка на пусту стороку
  if (event.target.value === '') {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
    return;
  }

  //перевірка на відповідність довжени inputa
  const userInputLength = event.target.value.length;
  const inputDataLength = event.target.getAttribute('data-length');

  if (String(userInputLength) === inputDataLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
    console.log('+');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
    console.log('-');
  }
};

inputRef.addEventListener('blur', checkInput);
