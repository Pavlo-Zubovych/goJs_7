// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1 id="title-output">Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector('#name-input ');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (element) => {
  nameOutputRef.textContent = element.target.value;
});

// Самодіяльнісь :))
const titleOutputRef = document.querySelector('#title-output');

inputRef.addEventListener('change', (element) => {
  titleOutputRef.textContent = `Містер ${nameOutputRef.textContent}, приємно познайомитись ;)`;
});
