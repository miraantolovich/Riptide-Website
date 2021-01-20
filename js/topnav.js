function makeResponsive() {
    var x = document.getElementById("menubar");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }
  