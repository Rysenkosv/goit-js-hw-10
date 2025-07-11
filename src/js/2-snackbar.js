import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { delay, state } = event.target.elements;
  const delayValue = Number(delay.value);
  const stateValue = state.value;

  setTimeout(() => {
    new Promise((resolve, reject) => {
      if (stateValue === 'fulfilled') {
        resolve('Fulfilled');
      } else {
        reject('Rejected');
      }
    })
      .then(() =>
        iziToast.success({
          message: ` ✅ Fulfilled promise in ${delayValue}ms`,
          position: 'topRight',
          messageColor: 'white',
          backgroundColor: 'green',
        })
      )
      .catch(() =>
        iziToast.error({
          message: `❌ Rejected promise in ${delayValue}ms`,
          position: 'topRight',
          messageColor: 'white',
          backgroundColor: 'red',
        })
      );
  }, delayValue);
}