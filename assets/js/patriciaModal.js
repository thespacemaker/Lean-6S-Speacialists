// Get the modal
var patriciaModal = document.getElementById("patriciaModal");

// Get the button that opens the modal
var patriciaBtn = document.getElementById("patriciaBtn");

// Get the <span> element that closes the modal
var patriciaSpan = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
patriciaBtn.onclick = function() {
  patriciaModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
patriciaSpan.onclick = function() {
  patriciaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == patriciaModal) {
    patriciaModal.style.display = "none";
  }
}
