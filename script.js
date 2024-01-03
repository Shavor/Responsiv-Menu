const links = document.querySelectorAll('.nav-list li a'),
      menuWrapper = document.querySelector('.nav-wrapper'),
      menu = document.querySelector('.nav-list'),
      humburger = document.querySelector('.humburger'),
      close = document.querySelector('.close');

for (link of links) {
  link.addEventListener('click', smoothScrol)
}

function smoothScrol(e){
  e.preventDefault();
  
  let href = this.getAttribute('href')
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
  })
  hideMenu()
}

// RESPONSIVE MOBILE MENU 
 
const showMenu = () => {
  humburger.style.display = 'none';
  close.style.transform = 'translateY(0)';
  menuWrapper.style.transform = 'translateX(0)';
  menu.style.transform = 'translateX(0)';
}

const hideMenu = () => {
  humburger.style.display = 'block';
  close.style.transform = 'translateY(-20rem)';
  menuWrapper.style.transform = 'translateX(-200%)';
  menu.style.transform = 'translateX(200%)';
}

humburger.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
menuWrapper.addEventListener('click', hideMenu);