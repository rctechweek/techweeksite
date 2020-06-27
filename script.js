var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.getElementById("leconcept").addEventListener("mouseover", function() {
    document.getElementById("leconcept").style.backgroundColor = "#BCE9CB";
});
    document.getElementById("leconcept").addEventListener("mouseout", function() {
    document.getElementById("leconcept").style.backgroundColor = "white";
});

document.getElementById("nosproduits").addEventListener("mouseover", function() {
    document.getElementById("nosproduits").style.backgroundColor = "#BCE9CB";
});
    document.getElementById("nosproduits").addEventListener("mouseout", function() {
    document.getElementById("nosproduits").style.backgroundColor = "white";
});

document.getElementById("notredemarche").addEventListener("mouseover", function() {
    document.getElementById("notredemarche").style.backgroundColor = "#BCE9CB";
});
    document.getElementById("notredemarche").addEventListener("mouseout", function() {
    document.getElementById("notredemarche").style.backgroundColor = "white";
});

