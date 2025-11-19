// Countdown 
// Countdown function before slideshow starts
function countdown() {
  let counter = 5; // Start countdown from 5 seconds
  let countdownDisplay = document.getElementById("countdown");

  // Update the countdown every second
  let timer = setInterval(function() {
    countdownDisplay.innerHTML = "Wildlife slideshow starts in " + counter + " seconds";
    counter--;

    // When countdown finishes, show the first slide
    if (counter < 0) {
      clearInterval(timer); // Stop the countdown
      countdownDisplay.innerHTML = ""; // Clear countdown text
      showSlides(slideIndex); // Start slideshow
    }
  }, 1000);
}

// Show the current slide
function showSlides(n) {
  let i; // Loop counter
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Loops back to first slide if n exceeds total
  if (n > slides.length) { slideIndex = 1 } 

  // Loops to last slide if n is less than 1
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the selected slide and highlight its dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Controls for next/previous arrows
function plusSlides(n) {
  showSlides(slideIndex += n);  
}

// Controls for dot navigation
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Start countdown when page loads
window.onload = countdown;



// Slideshow functionality
let slideIndex = 1;
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
  let i; // i is for upcoming loops
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // > # of slides loops back to 1
  if (n < 1) {slideIndex = slides.length} // < 1 loops to last slide
  for (i = 0; i < slides.length; i++) { // Hides all slides so only one shows
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) { // Starts new loops that goes through each dot
    dots[i].className = dots[i].className.replace(" active", ""); // removes "active" class from each dot 
  }
  slides[slideIndex-1].style.display = "block"; // Shows the current slide
  dots[slideIndex-1].className += " active"; // Adds "active" class to current dot so we know what slide we are on
}


// Regarding your question about why the image doesn't show up initially, the issue is that your JavaScript runs before the HTML elements are loaded. You're calling showSlides(slideIndex) at the top of your file, but the slides don't exist yet. Here are two ways to fix this:

//Option 1: Wrap your initialization in a window.onload function:
// let slideIndex = 1;

// Wait for page to load before showing slides
//window.onload = function() {
//    showSlides(slideIndex);
// };

//  Option 2: In your CSS file, make the first slide visible by default:

// .mySlides {
//    display: none;
// }

// .mySlides:first-child {
//    display: block;
// }