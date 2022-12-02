const john = document.getElementById('john');

john.addEventListener('focus', (event) => {
  event.target.style.background = 'lightblue';
}, true);

john.addEventListener('blur', (event) => {
  event.target.style.background = '';
}, true);
