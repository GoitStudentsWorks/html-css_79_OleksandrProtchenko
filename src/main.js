const btn = document.getElementById('burgerBtn');
const box = document.getElementById('modal');
btn.addEventListener('click', () => {
  const isActive = btn.classList.toggle('active');
  box.classList.toggle('is-open');
});
