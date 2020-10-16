// Get the modal
var adnanModal = document.getElementById("adnanModal");

// Get the button that opens the modal
var adnanBtn = document.getElementById("adnanBtn");

// Get the <span> element that closes the modal
var adnanSpan = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
adnanBtn.onclick = function() {
  adnanModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
adnanSpan.onclick = function() {
  adnanModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == adnanModal) {
    adnanModal.style.display = "none";
  }
}
