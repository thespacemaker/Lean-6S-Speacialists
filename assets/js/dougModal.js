// Get the modal
var dougModal = document.getElementById("dougModal");

// Get the button that opens the modal
var dougBtn = document.getElementById("dougBtn");

// Get the <span> element that closes the modal
var dougSpan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
dougBtn.onclick = function() {
  dougModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dougSpan.onclick = function() {
  dougModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == dougModal) {
    dougModal.style.display = "none";
  }
}
