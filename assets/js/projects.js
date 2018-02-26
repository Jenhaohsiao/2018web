

// Projects section


/* Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}
/* Slideshow JavaScript */


// Modal

// Get the modal



var project_sc_modal = document.getElementById('project_sc');
var project_sc_Btn = document.getElementById("project_sc_Btn");
var span1 = document.getElementsByClassName("close")[0];
project_sc_Btn.onclick = function() {
    project_sc_modal.style.display = "block";
}
span1.onclick = function() {
    project_sc_modal.style.display = "none";
}

var project_Tbiker_modal = document.getElementById('project_Tbiker');
var project_Tbiker_Btn = document.getElementById("project_Tbiker_Btn");
var span2 = document.getElementsByClassName("close")[1];
project_Tbiker_Btn.onclick = function() {
    project_Tbiker_modal.style.display = "block";
}
span2.onclick = function() {
    project_Tbiker_modal.style.display = "none";
}



window.onclick = function(event) {
    if (event.target == project_sc_modal) {
        project_sc_modal.style.display = "none";
    }else  if (event.target == project_Tbiker_modal) {
        project_Tbiker_modal.style.display = "none";
    }
}