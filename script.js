// TYPEWRITER EFFECT
let typed = new Typed(".greeting", {
    strings: ["Hello!", "Kumusta!", "こんにちは", "안녕하세요", "¡Hola!", "你好", "Ciao", "नमस्ते", "Olá", "مرحباً ", "Bonjour", "Привет"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
} )

// CURSOR TRAIL
const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", (e) => {
  cursor1.style.left = e.clientX + "px";
  cursor1.style.top = e.clientY + "px";

  cursor2.style.left = e.clientX + "px";
  cursor2.style.top = e.clientY + "px";
})

//REVEALING EFFECT
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 15;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }

    else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealUp);
function revealUp(){
  var reveals = document.querySelectorAll('.reveal-up');
  
  for (var i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 50;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }

    else {
      reveals[i].classList.remove('active');
    }
  }
}


// HOVER EFFECT
// const elements = document.querySelectorAll('.hover-gradient-text');
// const newClass = 'gradient-text';

// elements.forEach(element => {
//   element.addEventListener('mouseover', () => {
//     element.classList.add(newClass);
//   });

//   element.addEventListener('mouseout', () => {
//     element.classList.remove(newClass);
//   });
// })

const elements = document.querySelectorAll('.cursor2');
const links = document.querySelectorAll('.link-hover');
const hoverClass = 'cursor-hover';
const clickClass = 'cursor-click';

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    elements.forEach(element => {
      element.classList.add(hoverClass);
    });
  });

  link.addEventListener('mouseout', () => {
    elements.forEach(element => {
      element.classList.remove(hoverClass);
    });
  });

  link.addEventListener('mousedown', () => {
    elements.forEach(element => {
      element.classList.add(clickClass)
    })
  })

  link.addEventListener('mouseup', () => {
    elements.forEach(element => {
      element.classList.remove(clickClass)
    })
  })

});