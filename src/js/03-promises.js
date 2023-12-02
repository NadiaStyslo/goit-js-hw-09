import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonEl = document.querySelector('button');
const formEl = document.querySelector('form');
//console.log(buttonEl)
formEl.style.display = 'flex';
formEl.style.fontSize = '30px';
formEl.style.flexDirection = 'column';
buttonEl.style.fontSize = '30px';
buttonEl.style.margin = '6px';
formEl.style.padding = '5px';
//formEl.addEventListener('sumbit', onSumbit);
formEl.addEventListener('click', onForm);

//function onSumbit() {

//}

//function onSumbit() { }
function onForm(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  let delayVal = Number(delay.value);
  let stepVal = Number(step.value);
  let amoutVal = Number(amount.value);

  let position = 1;
  for (let i = 1; i <= amoutVal; i += 1) {
    // buttonEl.setAttribute('disabled', '')

    createPromise(position, delayVal)
      // buttonEl.setAttribute('disabled', '')
      .then(result => Notify.success(result))

      .catch(error => Notify.failure(error));
    position += 1;
    delayVal = delayVal + stepVal;
  }
}
function createPromise(position, delay) {
  buttonEl.setAttribute('disabled', '');

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
   
  });
}

// createPromise(2, 1500)

//   //formEl.removeAttribute('disabled')
//   .then(({ position, delay }) => {

//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {

//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
