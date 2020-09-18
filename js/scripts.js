let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".list-container");
let containerMenu = document.querySelector(".menu");
let activador = true;


//Menu de navegacion responsive

btnMenu.addEventListener("click", () => {

    document.querySelector(".btn-menu i").classList.toggle("fa-times");

    if(activador){
        menu.style.left = "0";
        menu.style.transition=".3s";
        activador = false;
    }else{
        if(activador == false){
        menu.style.left = "-100%";
        menu.style.transition=".3s";
        activador = true;
        }
    }
});


//efecto clase active
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach( (link) => {
            link.classList.remove('activo');
        });

        event.target.classList.add('activo');

    });

});

//efectos scroll

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {

    let currentScrollPos = window.pageYOffset;

    //mostrar y ocultar menu
    if(prevScrollPos > currentScrollPos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition = ".3s";
    }
    else {
        containerMenu.style.top = "-1000px";
        containerMenu.style.transition = ".3s";
    };

    prevScrollPos = currentScrollPos;


    //mostrar y ocultar scroll estilos

    let arriba = window.pageYOffset;

    if (arriba <= 600){
        containerMenu.style.borderBottom = "none";
    }
    else{
        containerMenu.style.borderBottom = "5px solid #ad6989";
    };
}

let verAbajo = document.querySelector("#abajo");

verAbajo.addEventListener("click", () => {
    document.body.scrollTop = 700;
    document.documentElement.scrollTop = 700;
});