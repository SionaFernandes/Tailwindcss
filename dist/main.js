let hambuger = document.getElementById("hambuger");
let hambugerdrop = document.getElementById("hambuger-drop");
console.log(hambuger, hambugerdrop);

hambuger.addEventListener("click", function () {
  //  hambuger.classList.toggle("show");
  if (!hambuger.classList.contains("show")) {
    hambuger.classList.add("show");
    hambugerdrop.style.display = "block";
  } else {
    hambuger.classList.remove("show");
    if (hambugerdrop.style.display == "block") {     
      hambugerdrop.style.display = "none";
    }
  }
});
