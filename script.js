
// var manu = document.querySelector(".lft i")
// var cross = document.querySelector("#full i")

// var tlnav = gsap.timeline()

// tlnav.to("#full",{
//     left:"30%",
//     duration:0.6
// })
// tlnav.from("#full h4", {
//     x:-150,
//     duration:0.5,
//     stagger:0.2,
//     opacity:0
// })
// tlnav.from("#full i",{
//     opacity:0
// })

// tlnav.pause()

// manu.addEventListener("click",function(){
//     tlnav.play()
// })
// cross.addEventListener("click",function(){
//     tlnav.reverse()
// })

// Section 01//

const videox = document.querySelectorAll(".video");
const texts = document.querySelectorAll(".texter");
const dotbtn = document.querySelectorAll(".dot-btn1");


let index = 0;
const duration = 9000; // 6 sec


function changeSlide() {
  videox.forEach(v => {
    v.pause();
    v.classList.remove("active");
  });

  texts.forEach(text => {
    text.classList.remove("active");
  });

   dotbtn.forEach(btn => {
    btn.classList.remove("active");
  });

  videox[index].classList.add("active");
  texts[index].classList.add("active");
  dotbtn[index].classList.add("active");

  videox[index].currentTime = 0;
  videox[index].play();

  index = (index + 1) % videox.length;
}

changeSlide();
setInterval(changeSlide, duration);

// section-02
let nextBtn = document.querySelector('.next'),
prevBtn = document.querySelector('.prev'),
content = document.querySelector('.content'),
list = document.querySelector('.list'),
item = document.querySelectorAll('item'),
runtime = document.querySelector('timerun')

nextBtn.onclick = function(){
    showSlider('next')
}


prevBtn.onclick = function(){
    showSlider('prev')
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.content .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        content.classList.add('next')
    }
    else{
        list.prepend( sliderItemsDom[ sliderItemsDom.length - 1])
        content.classList.add('prev')
    }

}
// Section 03 //

// const vidsound = 
// document.getElementById("music-vid");

// function enableSound(){
//     vidsound.muted = false;
//     vidsound.volume = 1;
//     // vidsound.play().catch(e =>
//     //     console.log(e));

//         document.removeEventListener("click", 
//         enableSound);

//         document.removeEventListener("touchstart", enableSound);
// }

// document.addEventListener("click", enableSound);
// document.addEventListener("touchstart", enableSound);

// vidsound.play();

// vidsound.addEventListener("play", () => {
//     // vidsound.muted = false;
//     // vidsound.volume = 1;
//     if(!vidsound.muted) v.volume =1;
// });

// vidsound.addEventListener("pause", () => {
//     vidsound.muted = true;
// });



// section 4

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        markers: false,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
})
tl.
    to("#hero-top", {
        top: "-50%",
    }, 'a')
    .to("#hero-bot", {
        bottom: "-60%",
    }, 'a')
    .to("#hero-top-h1", {
        top: "80%",
    }, 'a')
    .to("#hero-bot-h1", {
        bottom: "-100%",
    }, 'a')
    .from("#mid-cont video", {
        width: "100vw",
        height: "100vh",
        delay: 0.5,
        duration: 1,
    }, 'a')
    .from("#mid-cont #first-h1", {
        opacity: 0,
        scale:0.8,
        delay: 0.5,
        duration: 1,
    }, 'a')
  
    // section-04

    var tl = gsap.timeline({scrollTrigger:{
    trigger:"#section_10",
    markers:false,
    start:"40% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#section_10-hero2",{
   top:"0vh"
})
.to("#section_10-hero3",{
    top:"0vh"
})