'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(window.scrollY >navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
	navbarMenu.classList.remove('open');
})

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
	const link = target.dataset.link;
	if(link == null){
		return;
	}
    scrollIntoView(link);
});

//Navbar toggle button for small screen 
const navbarToggleBtn =  document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('open');
});

//contact me 
const homeContackBtn = document.querySelector('.home__contact');
homeContackBtn.addEventListener('click', () => {
	function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
 
    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);
})

function scrollIntoView(selector){
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({behavior: 'smooth'});
}


// Show "arrow-up" button when scrolling down 
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
	if(window.scrollY> navbarHeight / 2){
		arrowUp.classList.add('visible');
	}else{
		arrowUp.classList.remove('visible');
	}
})

// Arrow-up to home
arrowUp.addEventListener('click',()=>{
	scrollIntoView('#home');
})

// Home comment
const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};
mode: document.getElementById("mode")

// The strings to morph between. You can change these to anything you want!
const texts = [
	"Hi",
	"My name is",
	"SoyeonJO",
	"Developer",
	"Click Me"
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 2000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();


//Email Modal
window.onload = function() {
 
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
 
    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);
 
};



// Modals
var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("btn");
var spanes = document.getElementsByClassName("close");
var funcs = [];

function Modal(num) {
  return function() {
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };

    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}
 
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}

window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};



// Slide 
var slideIndex = 0; //slide index
// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  // Auto Move Slide
  var sec = 9000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}
// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n].style.display = "block";
 
}

// Mail me
$(document).ready(function(){
	emailjs.init("user_eh82MwoYUyodSAT0Wd9WA");		
	$('input[name=submit]').click(function(){       	 
	  
	  var templateParams = {	
			name: $('input[name=name]').val(),
			phone: $('input[name=phone]').val(), 
			email : $('input[name=email]').val(),
			message : $('textarea[name=message]').val()
					   };

	 emailjs.send('service_7sxqadn', 'template_slx1ukm', templateParams)
			 .then(function(response) {
				alert("메일이 정상적으로 발송되었습니다. 빠른시일 내에 연락드리겠습니다.");
			 }, function(error) {
				alert("메일 발송 실패!");
			 });
		});
	
 	 });


