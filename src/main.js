const btn = document.querySelectorAll('.btn');
const burgerBtn = document.querySelector('#burgerBtn');
const box = document.querySelector('#modal');
const logo = document.querySelector('#logo');

btn.forEach(b => {
  b.addEventListener('click', () => {
    b.blur();
  });
});
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  box.classList.toggle('is-open');
});

box.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    box.classList.remove('is-open');
    burgerBtn.classList.remove('active');
  });
});

logo.addEventListener('click', () => {
  box.classList.remove('is-open');
  burgerBtn.classList.remove('active');
});
