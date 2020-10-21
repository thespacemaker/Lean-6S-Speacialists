// Get the modal
var dawnModal = document.getElementById("dawnModal");

// Get the button that opens the modal
var dawnBtn = document.getElementById("dawnBtn");

// Get the <span> element that closes the modal
var dawnSpan = document.getElementsByClassName("close")[5];

// When the user clicks on the button, open the modal
dawnBtn.onclick = function() {
  dawnModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dawnSpan.onclick = function() {
  dawnModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == dawnModal) {
    dawnModal.style.display = "none";
  }
}
