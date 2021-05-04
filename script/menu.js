const openMenu = () => {
  const menuItems = document.querySelector('nav').querySelector('ul').querySelectorAll('li');
  const menu = document.querySelector('nav');
  const hamburgerMenu = document.querySelector('.hamburgermenu');

  menuItems.forEach(menuItem => {
    menuItem.style.display = 'block';
    
  });
}

// window.onload = () => {
//   openMenu();
// }


