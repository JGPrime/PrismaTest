// perso parallaxH
// const parallaxH = document.querySelector('#footer'); //focus sur le bacckground-image

// window.addEventListener('scroll', () => {
//     parallaxH.style.backgroundPositionY = -window.scrollY / 8 + "px"; //scroll

// });

//plugin simple parallax

// $('.parallax-window').parallax({imageSrc: 'Assets/kiloren-2x.jpg'});   //utilisation du plugin en js ou en html 

//menu

function menu() {
  document.getElementById("myDropdown").classList.toggle("show");  //focus sur l'id pour effectuer un toogle 
}
window.onclick = event => {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");  // focus sur le container où nous allons afficher la liste
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {   //géré l'affichage du container avec la liste 
        openDropdown.classList.remove('show');
      }
    }
  }
}