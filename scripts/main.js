let myHeading = document.querySelector("h1");
myHeading.textContent = "La présentation de moi, Thibault, Tibo, Teebo, Thibo, T'es beau, t'es moche";

alert("Bonjour ! Attention risque de nudité en continuant !");

document.querySelector("html").addEventListener("click", function () {
  alert("Aïe, arrêtez de cliquer !! Et continue a lire");
});

let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/moi1.jpg") {
    myImage.setAttribute("src", "images/moi2.jpg");
  } else {
    myImage.setAttribute("src", "images/moi1.jpg");
  }
});



