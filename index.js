var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

const button = document.querySelector(".btn")
button.addEventListener('click', function (e) {

    e.preventDefault()
    document.querySelector('.opening').scrollIntoView({
        behavior: 'smooth'
    })
})

window.addEventListener("scroll", function(){
    var menu= document.querySelector(".navbars");
    menu.classList.toggle("sticky",window.scrollY > 0)
})



const hamburger_menu = document.querySelector(".hamburger-menu")

const container = document.querySelector(".containers")

hamburger_menu.addEventListener("click", ()=>{
    container.classList.toggle("active")
})


const pengertian = document.querySelector('.pengertian')
pengertian.querySelector(".topic").addEventListener("click",()=>{
    pengertian.querySelector('.isi').classList.toggle("active")
    expandPanel(pengertian, '70vh')
})

const basedon = document.querySelector(".based-on")
basedon.querySelector(".topic").addEventListener("click",()=>{
    basedon.querySelector('.isi').classList.toggle("active")
    expandPanel(basedon, '140vh')
})

const penyebab = document.querySelector(".penyebab")
penyebab.querySelector(".topic").addEventListener("click",()=>{
    penyebab.querySelector('.isi').classList.toggle("active")
    expandPanel(penyebab, 'vh')
})

const kesimpulan = document.querySelector(".kesimpulan")
kesimpulan.querySelector(".topic").addEventListener("click",()=>{
    kesimpulan.querySelector('.isi').classList.toggle("active")
    expandPanel(kesimpulan, '90vh')
})


function expandPanel(panel, height){
    isi =  panel.querySelector(".isi")
    icon = panel.querySelector(".topic").querySelector('.fas.fa-plus') || panel.querySelector(".topic").querySelector('.fas.fa-minus');
    icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
    // if(icon.className === 'fas fa-minus'){
    //     isi.style.maxHeight = "2060px";
    // }else{
    //     isi.style.maxHeight = "0px";
    // }
    
    // isi.style.height = isi.style.height === '0px' ? 'auto' : '0px';
}
// const pengertian = document.querySelector(".pengertian")
// pengertian.querySelector(".topic").addEventListener("click",()=>{
//     isi =  pengertian.querySelector(".isi")
//     icon = pengertian.querySelector(".topic").querySelector('.fas.fa-plus') || pengertian.querySelector(".topic").querySelector('.fas.fa-minus');
//     icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
//     isi.style.height = isi.style.height === '0px' ? '70vh' : '0px';
// })

// const basedon = document.querySelector(".based-on")
// basedon.querySelector(".topic").addEventListener("click",()=>{
//     isi =  basedon.querySelector(".isi")
//     icon = basedon.querySelector(".topic").querySelector('.fas.fa-plus') || basedon.querySelector(".topic").querySelector('.fas.fa-minus');
//     icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
//     isi.style.height = isi.style.height === '0px' ? '140vh' : '0px';
// })

// const penyebab = document.querySelector(".penyebab")
// penyebab.querySelector(".topic").addEventListener("click",()=>{
//     isi =  penyebab.querySelector(".isi")
//     icon = penyebab.querySelector(".topic").querySelector('.fas.fa-plus') || penyebab.querySelector(".topic").querySelector('.fas.fa-minus');
//     icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
//     isi.style.height = isi.style.height === '0px' ? '95vh' : '0px';
// })

// const kesimpulan = document.querySelector(".kesimpulan")

// kesimpulan.querySelector(".topic").addEventListener("click",()=>{
//     isi =  kesimpulan.querySelector(".isi")
//     icon = kesimpulan.querySelector(".topic").querySelector('.fas.fa-plus') || kesimpulan.querySelector(".topic").querySelector('.fas.fa-minus');
//     icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
//     isi.style.height = isi.style.height === '0px' ? '220vh' : '0px';
// })

function generateLink() {
    let message = document.form_main.message.value;
    let url = "https://wa.me/";
    window.location.href = `${url}6282259397631?text=${message}`;
}