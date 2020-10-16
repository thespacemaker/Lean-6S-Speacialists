// Get the modal
var albertModal = document.getElementById("albertModal");

// Get the button that opens the modal
var albertBtn = document.getElementById("albertBtn");

// Get the <span> element that closes the modal
var albertSpan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
albertBtn.onclick = function() {
  albertModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
albertSpan.onclick = function() {
  albertModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == albertModal) {
    albertModal.style.display = "none";
  }
}
