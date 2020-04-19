//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//recorrerlos

links.forEach(function(link){

//agregar un elemento click a cada uno de ellos - case sensitive
link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");

    //quitarle las clases de animacion que ya tiene
    content.classList.remove("zoomIn")
    content.classList.remove("animated")

    //agregar clases para animar su salida
    content.classList.add("fadeOutUp")
    content.classList.add("animated")

    setTimeout(function(){
        location.href = "/";}
        ,600);

        return false;
    })

})