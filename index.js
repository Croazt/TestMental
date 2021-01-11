window.addEventListener("scroll", function(){
    var menu= document.querySelector(".navbar");
    menu.classList.toggle("sticky",window.scrollY > 0)
})

const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container")

hamburger_menu.addEventListener("click", ()=>{
    container.classList.toggle("active")
})


