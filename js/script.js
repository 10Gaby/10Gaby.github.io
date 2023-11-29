document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}


// ...

// Obtén todos los elementos <a> dentro del menú
var menuLinks = document.querySelectorAll("#nav ul a");

// Agrega un evento de clic a cada enlace del menú
menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Cierra el menú al hacer clic en un enlace
        ocultar_menu();
    });
});

/*BOTONES COMPARTIR*/

const shareButton = document.querySelectorAll("button.shareButton")

shareButton[0].addEventListener("click", (e) => {
    for( let i=0; i < shareButton.length; i++ ) {
       shareButton[i].classList.toggle("open")
       shareButton[0].classList.remove("sent")
    }
})

for( let i=1; i < shareButton.length; i++ ) {
   
   shareButton[i].addEventListener("click", (e) => {
      
   for( let i=0; i < shareButton.length; i++ ) {
      shareButton[i].classList.toggle("open")
   }
   shareButton[0].classList.toggle("sent")
   })
}




/* 

var nav = document.getElementById('nav');
var navlinks = nav.getElementsByTagName('a');

function toggleNav() {
    (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
  }

document.getElementById('nav-icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleNav();
});

for(var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function() {
      toggleNav();
  });
}

*/