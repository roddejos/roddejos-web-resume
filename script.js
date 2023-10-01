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
