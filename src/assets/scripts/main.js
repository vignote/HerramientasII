/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


document.querySelector('.header__hamburguer-menu').addEventListener('click', () => {
  console.log('Entra');
  const menu = document.querySelector(".main-nav");
  if (menu.style.display=="block"){
    menu.style.display="none";
  }else {
    menu.style.display="block";
  } 
})


const nav_items = document.querySelectorAll('.main-nav__link')
nav_items.forEach (nav_item =>{
  nav_item.addEventListener('click', () => {
    console.log('pulsado');
    if (screen.width<768){
      const menu = document.querySelector(".main-nav");
      menu.style.display="none";
    }
  
  });
})


