const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // remove active class from all li elements
    navLinks.forEach(link => link.parentElement.classList.remove('active'));
    // add active class to the clicked link's parent li element
    e.target.parentElement.classList.add('active');
  });
});
