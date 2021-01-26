let rows = ["background-image: url('../images/profileimg/20210113_210314.jpg')",
"background-image: url('../images/profileimg/20210113_210322.jpg')",
"background-image: url('../images/profileimg/20210113_210332.jpg')",
"background-image: url('../images/profileimg/20210113_210413.jpg')",
"background-image: url('../images/profileimg/20210113_210359.jpg')",
"background-image: url('../images/profileimg/20210113_210405.jpg')",
"background-image: url('../images/profileimg/20210113_210348.jpg')"

]

let instagram =["assyadiva", "rafikaahmd",  "hanifah.fzh_",  "nblaasis_",  "faiqahabugar",  "nurrahmasss",  "is.azizahb"]
let names =["Assyadiva Annisa","Rafika Ahmad","Hanifa Fauziah","Nabila Sri Rejeki A.","Nurul A. Faiqah F. A.","Nur Rahma Sideng","Nurul Azizah B"]
let NIM = ["42119004","42119017","42119006","42119014","42119015","42119023","42119016"]
let quotes =["Self love isn’t selfish it’s important","Make happines a priority with yourself in the process","Dont stress everything will work out","Jika kau tak mampu terbang, larilah. Jika kau tak mampu berlari, berjalanlah. Jika kau tak mampu berjalan, merangkaklah. Bergerak maju dengan merangkak, setidaknya","Be yourself, and don't apologize","Don't be sorry for too long","You are capable of amazing things. Your feelings are valid. You deserves the love you keep trying to give everyone else. You are enough. Don't give up on yourself!"]
var column = document.querySelector(".overlay")
for (let i = 0; i < 7; i++) {
    column.innerHTML += '<div class="profile-card"><div class="profile-photo-card"><div class="profile-photo"><div class="photos" style="'+ rows[i]+';"></div></div></div><div class="profile-desc-card"><div class="profile-name"><h3 class="name">'+names[i]+'</h3><h5 class="">'+NIM[i]+'</h5><br><h5 class="quotes">"'+quotes[i]+'"</h5></div><a href="https://www.instagram.com/'+instagram[i]+'/" class="social-media-sec">FOLLOW ME ON INSTAGRAM</a></div>'
}

const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container")

hamburger_menu.addEventListener("click", ()=>{
    container.classList.toggle("active")
})

window.addEventListener("scroll", function(){
    var menu= document.querySelector(".navbar");
    menu.classList.toggle("sticky",window.scrollY > 0)
})

