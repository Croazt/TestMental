let rows = ["background-image: url('../images/profileimg/20210113_210314.jpg')",
"background-image: url('../images/profileimg/20210113_210322.jpg')",
"background-image: url('../images/profileimg/20210113_210332.jpg')",
"background-image: url('../images/profileimg/20210113_210348.jpg')",
"background-image: url('../images/profileimg/20210113_210359.jpg')",
"background-image: url('../images/profileimg/20210113_210405.jpg')",
"background-image: url('../images/profileimg/20210113_210413.jpg')"
]

let names =["Assyadiva Annisa","Rafika Ahmad","Hanifa Fauziah","Nurul Azizah B","Nurul Annisa F. F. A.","Nur Rahma Sideng","Nabila Sri Rejeki A."]
let NIM = ["42119004","42119017","42119006","42119016","42119015","42119023","42119014"]
let quotes =["Self love isn’t selfish it’s important","Make happines a priority with yourself in the process","Dont stress everything will work out","You are capable of amazing things. Your feelings are valid. You deserves the love you keep trying to give everyone else. You are enough. Don't give up on yourself!","Be yourself, and don't apologize","Don't be sorry for too long","Jika kau tak mampu terbang, larilah. Jika kau tak mampu berlari, berjalanlah. Jika kau tak mampu berjalan, merangkaklah. Bergerak maju dengan merangkak, setidaknya"]
var column = document.querySelector(".overlay")
for (let i = 0; i < 7; i++) {
    column.innerHTML += '<div class="profile-card"><div class="profile-photo-card"><div class="profile-photo"><div class="photos" style="'+ rows[i]+';"></div></div></div><div class="profile-desc-card"><div class="profile-name"><h3 class="name">'+names[i]+'</h3><h5 class="">'+NIM[i]+'</h5><br><h5 class="quotes">"'+quotes[i]+'"</h5></div><div class="social-media-sec"></div></div>'
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

