const navSlice = () => {
    const burger = document.querySelector('.menu_burger');
    const nav = document.querySelector('.items__nav');
    const navLinks = document.querySelectorAll('.items__nav li')
    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        /*le agregamos la animacion a los links <a> dentro del ul*/
        navLinks.forEach((links, index) => {
           if (links.style.animation) {
               links.style.animation=``;
           } else {
            links.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            //console.log(index / 7);
           }            
        });
        /*
        le damos la animacion al menu-burger, la clase toggle rota con transform:rotateZ
        las lineas 1 y 3 en el eje Z, la primer linea1 en -45deg y ademas 
        aplicamos un translate(-7px,9px).
        la clase .toggle .linea2 se aplica un opacity de 0 para ocultarlo. 
         */
        burger.classList.toggle('toggle');
    });
}

navSlice(); 