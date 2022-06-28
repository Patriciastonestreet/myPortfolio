
// fade when scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");  //select class .reveal

  for (var i = 0; i < reveals.length; i++) {
    var pageHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < pageHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();
