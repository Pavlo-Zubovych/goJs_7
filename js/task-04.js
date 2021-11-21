// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// + Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// + Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// + Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
