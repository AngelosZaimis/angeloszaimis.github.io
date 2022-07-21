'use strict'

const hamburder = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const mobileAnchors = document.querySelectorAll('.mobile-anchors')
const toTopBtn = document.querySelector('.to-top');
const loader = document.getElementById('preloader');



// CIRCULAR BAR FIRST AND COPY VARIABLES
let progressBar = document.querySelector('.circular-progress');
let valueContainer = document.querySelector(".value-container");
let progressValue = 0;
let progressEndValue = 100;
let speed = 35;

let progressBarCopy = document.querySelector('.circular-progress-copy');
let valueContainerCopy = document.querySelector(".value-container-copy");
let progressValueCopy = 0;
let progressEndValueCopy = 50;
let speedCopy = 35;

// CIRCULAR BAR SECOND AND COPY VARIABLES
let progressBarTwo = document.querySelector('.circular-progress-two');
let valueContainerTwo = document.querySelector(".value-container-two");
let progressValueTwo = 0;
let progressEndValueTwo = 90;
let speedTwo = 35;

let progressBarTwoCopy = document.querySelector('.circular-progress-two-copy');
let valueContainerTwoCopy = document.querySelector(".value-container-two-copy");
let progressValueTwoCopy = 0;
let progressEndValueTwoCopy = 30;
let speedTwoCopy= 35;


// CIRCULAR BAR THIRD VARIABLES
let progressBarThree = document.querySelector('.circular-progress-three');
let valueContainerThree = document.querySelector(".value-container-three");
let progressValueThree = 0;
let progressEndValueThree = 95;
let speedThree = 35;



// CIRCULAR BAR 4TH VARIABLES
let progressBarFour = document.querySelector('.circular-progress-four');
let valueContainerFour = document.querySelector(".value-container-four");
let progressValueFour = 0;
let progressEndValueFour = 70;
let speedFour = 35;


// CIRCULAR BAR 5TH VARIABLES
let progressBarFive = document.querySelector('.circular-progress-five');
let valueContainerFive = document.querySelector(".value-container-five");
let progressValueFive = 0;
let progressEndValueFive = 85;
let speedFive = 35;


// CIRCULAR BAR 6TH VARIABLES
let progressBarSix = document.querySelector('.circular-progress-six');
let valueContainerSix = document.querySelector(".value-container-six ");
let progressValueSix = 0;
let progressEndValueSix = 50;
let speedSix = 35;



// CIRCULAR BAR 1 SKILLS  VARIABLES
let progressBarSkills = document.querySelector('.circular-progress-skills');
let valueContainerSkills = document.querySelector(".value-container-skills");
let progressValueSkills = 0;
let progressEndValueSkills = 100;
let speedSkils = 35;

// CIRCULAR BAR 2 SKILLS  VARIABLES
let progressBarSkillsTwo = document.querySelector('.circular-progress-skillstwo');
let valueContainerSkillsTwo = document.querySelector(".value-container-skillstwo");
let progressValueSkillsTwo = 0;
let progressEndValueSkillsTwo = 80;
let speedSkillsTwo = 35;

// CIRCULAR BAR 3 SKILLS  VARIABLES
let progressBarSkillsThree = document.querySelector('.circular-progress-skillsthree');
let valueContainerSkillsThree = document.querySelector(".value-container-skillsthree");
let progressValueSkillsThree = 0;
let progressEndValueSkillsThree = 100;
let speedSkillsThree = 35;


//CIRCULAR PROGRESS BAR FIRST AND COPY START// 

let progress = setInterval(()=> {
    
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValue * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue){
        clearInterval(progress);
    }
}, speed)


let progressCopy= setInterval(()=> {
    
    progressValueCopy++;
    valueContainerCopy.textContent = `${progressValueCopy}%`;
    progressBarCopy.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueCopy * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueCopy * 3.6}deg
    )`;
    if (progressValueCopy == progressEndValueCopy){
        clearInterval(progressCopy);
    }
}, speedCopy)




//CIRCULAR PROGRESS BAR SECOND AND COPY START//

let progressTwo = setInterval(()=> {
    
    progressValueTwo++;
    valueContainerTwo.textContent = `${progressValueTwo}%`;
    progressBarTwo.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueTwo * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueTwo * 3.6}deg
    )`;
    if (progressValueTwo == progressEndValueTwo){
        clearInterval(progressTwo);
    }
}, speedTwo)


let progressTwoCopy = setInterval(()=> {
    
    progressValueTwoCopy++;
    valueContainerTwoCopy.textContent = `${progressValueTwoCopy}%`;
    progressBarTwoCopy.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueTwoCopy * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueTwoCopy * 3.6}deg
    )`;
    if (progressValueTwoCopy == progressEndValueTwoCopy){
        clearInterval(progressTwoCopy);
    }
}, speedTwoCopy)




//CIRCULAR PROGRESS BAR THIRD START//

let progressThree = setInterval(()=> {
    
    progressValueThree++;
    valueContainerThree.textContent = `${progressValueThree}%`;
    progressBarThree.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueThree * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueThree * 3.6}deg
    )`;
    if (progressValueThree == progressEndValueThree){
        clearInterval(progressThree);
    }
}, speedThree)





//CIRCULAR PROGRESS BAR 4TH START//


let progressFour = setInterval(()=> {
    
    progressValueFour++;
    valueContainerFour.textContent = `${progressValueFour}%`;
    progressBarFour.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueFour * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueFour * 3.6}deg
    )`;
    if (progressValueFour == progressEndValueFour){
        clearInterval(progressFour);
    }
}, speedFour)




//CIRCULAR PROGRESS BAR 5TH START//


let progressFive = setInterval(()=> {
    
    progressValueFive++;
    valueContainerFive.textContent = `${progressValueFive}%`;
    progressBarFive.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueFive * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueFive * 3.6}deg
    )`;
    if (progressValueFive == progressEndValueFive){
        clearInterval(progressFive);
    }
}, speedFive)


//CIRCULAR PROGRESS BAR 6TH START//

let progressSix = setInterval(()=> {
    
    progressValueSix++;
    valueContainerSix.textContent = `${progressValueSix}%`;
    progressBarSix.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueSix * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueSix * 3.6}deg
    )`;
    if (progressValueSix == progressEndValueSix){
        clearInterval(progressSix);
    }
}, speedSix)


//CIRCULAR PROGRESS SKILLS BAR first START//
let progressSkills = setInterval(()=> {
    
    progressValueSkills++;
    valueContainerSkills.textContent = `${progressValueSkills}%`;
    progressBarSkills.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueSkills * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueSkills * 3.6}deg
    )`;
    if (progressValueSkills == progressEndValueSkills){
        clearInterval(progressSkills);
    }
},speedSkils)

//CIRCULAR PROGRESS SKILLS BAR second START//
let progressSkillsTwo = setInterval(()=> {
    
    progressValueSkillsTwo++;
    valueContainerSkillsTwo.textContent = `${progressValueSkillsTwo}%`;
    progressBarSkillsTwo.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueSkillsTwo * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueSkillsTwo * 3.6}deg
    )`;
    if (progressValueSkillsTwo == progressEndValueSkillsTwo){
        clearInterval(progressSkillsTwo);
    }
},speedSkillsTwo);

//CIRCULAR PROGRESS SKILLS BAR 3rd START//
let progressSkillsThree = setInterval(()=> {
    
    progressValueSkillsThree++;
    valueContainerSkillsThree.textContent = `${progressValueSkillsThree}%`;
    progressBarSkillsThree.style.background = `conic-gradient(
        #3500d3, #5401d9, #6d04df, #820ae5, #9612eb ${progressValueSkillsThree * 3.6}deg,
        rgba(74, 73, 73, 0.619) ${progressValueSkillsThree * 3.6}deg
    )`;
    if (progressValueSkillsThree == progressEndValueSkillsThree){
        clearInterval(progressSkillsThree);
    }
},speedSkillsThree);

// TO TOP BUTTON//
window.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 100){
        toTopBtn.classList.add('active')
    }else{
        toTopBtn.classList.remove('active');
    }
})




// SKILLS CAROUSEL

const buttons = document.querySelectorAll('[data-carousel-button  ]');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides= button.closest('[data-carousel]').querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;


        if (newIndex < 0 ){
            newIndex = slides.children.length - 1
        }
        if ( newIndex >= slides.children.length ){
            newIndex = 0
        }
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// SCROLL EFFECT
window.addEventListener('scroll', ()=>{
    const reveals = document.querySelectorAll('.reveal')
    const wrapper = document.querySelector('.wrapper')

    for (let i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        
        }else{
            reveals[i].classList.remove('active')
      
        }
    }
});



// HABURGER MENU//
hamburder.addEventListener('click', ()=> {
    hamburder.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active')
})




// ANCHORS CLICK//
mobileAnchors.forEach(item => {

    item.addEventListener('click', ()=> {

        hamburder.classList.remove('is-active');
        mobileMenu.classList.remove('is-active')
    })
})






//PRE LOADER//

window.addEventListener('load', setTimeout(()=>{
    loader.style.display = 'none';
},500))




// CONTACT FORM //

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aggeloszaimiis@gmail.com",
        Password : "623FF7EB1E15384118A2330EF59E6825938B",
        To : 'angelos.zaimis.dev@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "name: " + document.getElementById('name').value
        + "<br> Email: " + document.getElementById('email').value
        + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert(message)
    );  
}




