const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const overlayLinks = doc.querySelectorAll(".overlay__content a");
let question = document.querySelectorAll(".question");

document.addEventListener("DOMContentLoaded", () => {
  menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
  });

  menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });

  overlayLinks.forEach(link => {
    link.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });
  });
});

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

var menuItems = document.querySelectorAll('.nav__links li a, #mobile__menu .overlay__content a');
var sections = document.querySelectorAll('section');

function handleClick(event) {
  event.preventDefault();
  menuItems.forEach(function (item) {
    item.classList.remove('item-active');
  });
  this.classList.add('item-active');
  var clickedSectionId = this.getAttribute('href').substring(1);
  var targetSection = document.getElementById(clickedSectionId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

menuItems.forEach(function (item) {
  item.addEventListener('click', handleClick);
});

window.addEventListener('scroll', function () {
  var currentSection = null;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var startOffsetPercentage = 0.4;
  var endOffsetPercentage = 0.4;

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionStart = section.offsetTop - section.offsetHeight * startOffsetPercentage;
    var sectionEnd = section.offsetTop + section.offsetHeight - section.offsetHeight * endOffsetPercentage;

    if (scrollTop >= sectionStart && scrollTop < sectionEnd) {
      currentSection = section;
      break;
    }
  }

  menuItems.forEach(function (item) {
    var itemId = item.getAttribute('href').substring(1);
    if (currentSection && itemId === currentSection.id) {
      item.classList.add('item-active');
    } else {
      item.classList.remove('item-active');
    }
  });
});

(function() {
    var css = document.createElement('link');
    css.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    css.rel = 'stylesheet';
    css.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(css);
  })();
 
function showAlert() {
  alert("Jūsų pranešimas sėkmingai išsiųstas!")
}


