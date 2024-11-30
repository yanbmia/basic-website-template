const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add('hidden'); // Hide header when scrolling down
  } else {
    header.classList.remove('hidden'); // Show header when scrolling up
  }
  lastScrollY = window.scrollY;
});
