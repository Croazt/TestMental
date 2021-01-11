var articleTitle = ["MATERI 1","MATERI 2","MATERI 3","MATERI 4"]
var articleImage = ["images/215112.jpg","images/215112.jpg","images/215112.jpg","images/215112.jpg"]
var articleDesc = ["INI JUDUL SANGAT SANGAT SINGKAT DARI ARTIKELNYA","INI JUDUL SANGAT SANGAT SINGKAT DARI ARTIKELNYA","INI JUDUL SANGAT SANGAT SINGKAT DARI ARTIKELNYA","INI JUDUL SANGAT SANGAT SINGKAT DARI ARTIKELNYA"]
var articleDescColor = ["#394867","#f1f6f9","#9ba4b4","#f1f6f9"]
var articleTitleColor = ["#9ba4b4","#000000","#394867","#9ba4b4"]
var articleDescFontColor = ["#f1f6f9","#394867","#14274e","#394867",]
var articleTitleFontColor = ["#f1f6f9","#f1f6f9","#f1f6f9","#f1f6f9",]
var column = document.querySelector(".column")
for (let i = 0; i < 4; i++) {
    column.innerHTML += '<div class="articles"><div class="article-container" style="background-color:'+articleDescColor[i]+';color:'+articleDescFontColor[i]+';  ">'+articleDesc[i]+'</div><img src="'+articleImage[i]+'"><div class="article-title" style="background-color:'+articleTitleColor[i]+';color:'+articleTitleFontColor[i]+'; "><p>'+articleTitle[i]+'</p></div></div>'    
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




