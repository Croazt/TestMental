var articleTitle = ["judul 1","judul 2","judul 3","judul 4"]
var articleImage = ["images/215112.jpg","images/215112.jpg","images/215112.jpg","images/215112.jpg"]
var articleDesc = ["INI DESKRIPSI SINGKAT ARTIKELNYA","INI DESKRIPSI SINGKAT ARTIKELNYA","INI DESKRIPSI SINGKAT ARTIKELNYA","INI DESKRIPSI SINGKAT ARTIKELNYA"]
var articleDescColor = ["#a88d6f","#f6f5f1","#9aa5a7","#f6f5f1"]
var articleTitleColor = ["#9aa5a7","#000000","#a88d6f","#9aa5a7"]
var column = document.querySelector(".column")
for (let i = 0; i < 4; i++) {
    column.innerHTML += '<div class="articles"><div class="article-container" style="background-color:'+articleDescColor[i]+';  ">Halo semua ada kontol disin</div><img src="'+articleImage[i]+'"><div class="article-title" style="background-color:'+articleTitleColor[i]+';"><p>'+articleTitle[i]+'</p></div></div>'    
}

window.addEventListener("scroll", function(){
    var menu= document.querySelector(".navbar");
    menu.classList.toggle("sticky",window.scrollY > 0)
})

const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container")

hamburger_menu.addEventListener("click", ()=>{
    container.classList.toggle("active")
})




