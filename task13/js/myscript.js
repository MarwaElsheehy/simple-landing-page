//local storage
let mainColor = localStorage.getItem("color-option");

if(mainColor !== null){
    console.log("local storage is not empty");
    document.documentElement.style.setProperty("--main-color", mainColor);
}
//setting box
document.querySelector(".toggle i").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
}
//switch colors
const colors = document.querySelectorAll(".colors-list li");

colors.forEach(item =>{
    item.addEventListener("click", (e)=>{
        console.log(e.target.dataset.color);
        //set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        //set color on local storage
        localStorage.setItem("color-option", e.target.dataset.color);
        //remove active class from all childs
        e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
            ele.classList.remove("active");
        })
        //add active class
        e.target.classList.add("active");
    })
})
//background option
let backgroundOption = true;
//control variable
let backgroundInterval;
//switch backgrounds
const backgrounds = document.querySelectorAll(".background-list span");

backgrounds.forEach(items =>{
    items.addEventListener("click", (e)=>{
        //remove active class
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
        })
        //add active class
        e.target.classList.add("active");

        //background code
        if(e.target.dataset.background === "yes"){
            backgroundRandom();
        }else{
            clearInterval(backgroundInterval);
        }
    })
})
//landing page
let landingPage = document.querySelector(".landing-page");

let img = ["p1.jpg", "p2.jpg"];

//background function 
function backgroundRandom (){
    if(backgroundOption === true){

       backgroundInterval = setInterval(()=>{
       let randomNumber = Math.floor(Math.random() * img.length);

    landingPage.style.backgroundImage = 'url("images/'+ img[randomNumber] +'")';
}, 1000)
    }
}
backgroundRandom();
//skill section
let ourSkills = document.querySelector(".skills");
window.onscroll = function (){
    let offsetTop = ourSkills.offsetTop;
    
    let outerHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.scrollY;

    if(windowScrollTop = (offsetTop + outerHeight - windowHeight)){
        let allSkills = document.querySelectorAll(".skill-box .progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        })
    }
}
//reveal element 
window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    for(i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}