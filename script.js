var tabLinks = document.getElementsByClassName("tab-links");
var tabContains = document.getElementsByClassName("tab-contain");

var opentab = (tabname) => {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontain of tabContains) {
    tabcontain.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
};

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}

function closemenu() {
  sidemeu.style.right = "-200px";
}


// -----------------contact form------------------
