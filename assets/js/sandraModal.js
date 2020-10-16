// Get the modal
var sandraModal = document.getElementById("sandraModal");

// Get the button that opens the modal
var sandraBtn = document.getElementById("sandraBtn");

// Get the <span> element that closes the modal
var sandraSpan = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
sandraBtn.onclick = function() {
  sandraModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sandraSpan.onclick = function() {
  sandraModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sandraModal) {
    sandraModal.style.display = "none";
  }
}
