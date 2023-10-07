let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCourse: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
          clickable:true,
    },
    autoplay:{
      delay:3500,
      disableOnInteraction:false,
  },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".teachers-slider", {
  spaceBetween:20,
  loop:true,
  centeredSlides:true,
  pagination:{
    el: ".swiper-pagination",
    clickable:true,
  },
  autoplay:{
      delay:4000,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,

    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween:20,
  loop:true,
  centeredSlides:true,
  pagination:{
    el: ".swiper-pagination",
    clickable:true,
  },
  autoplay:{
      delay:4000,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,

    },
  },
});

//Google sheet JavaScript code

const scriptURL = 'https://script.google.com/macros/s/AKfycbw3LXbVGlgB-a4sBI_5Ux4R54xrzi48TmgeUj5adqZBadH_otVzUDmJr92ODmZj0soaJg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
});

//what's app JavaScript code

function sendToWhatsapp(){
	let number = "+918777497485";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let phone = document.getElementById('your number').value;
  let course = document.getElementById('course').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Phone : " +phone+ "%0a%0a";
  + "Course : " +course+ "%0a";


	window.open(url, '_blank').focus();
}

// javascript code for email validation

// function emailSend(){
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "nooruddin786@gmail.com",
//     Password : "3F9016FC406D49595DC352DE8E1EB2682FAE",
//     To : 'nooruddinmdafsar786@gmail.com',
//     From : "mdafsar786noor@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }