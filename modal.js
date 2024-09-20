// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let stars = document.getElementsByClassName("stjerne");
let selectedStars = 0; // Keep track of the number of selected stars

function gfg(n) {
  selectedStars = n;
  highlightStars(n);
}

// Highlight stars on hover
function highlightStars(n) {
  remove();
  for (let i = 0; i < n; i++) {
    stars[i].classList.add(`cls-${i+1}`);
  }
}

// Reset stars to previous selected state on mouse out
function resetStars() {
  remove();
  if (selectedStars > 0) {
    highlightStars(selectedStars);
  }
}

// Remove all previously applied classes
function remove() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("cls-1", "cls-2", "cls-3", "cls-4", "cls-5");
  }
}