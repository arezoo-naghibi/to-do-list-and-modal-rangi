let inputElem = document.querySelector("input");
let colorsBox = document.querySelectorAll(".color-box");
let boxCountainer = document.querySelector(".box-container");
let containerElem = document.querySelector(".container");
let saveElemnt = document.getElementById("save");
let modalButton = document.getElementById("modal");
let parentModall = document.querySelector(".parent-modal");
let closeModall = document.getElementById("x");
let box = document.querySelector(".box");
let clear = document.querySelector("#clear");

colorsBox.forEach(function (colorx) {
  colorx.addEventListener("click", function (event) {
    let mainColore = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColore;
  });
});

function getNewElem() {
  let newDiv = document.createElement("div");
  newDiv.className = "container";

  let inputBg = inputElem.style.backgroundColor;
  newDiv.style.backgroundColor = inputBg;

  let newI = document.createElement("i");
  newI.className = "fa fa-trash fa-2x trash";
  newI.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  let newP = document.createElement("p");
  newP.className = "plas";
  newP.innerHTML = inputElem.value;

  newDiv.append(newP, newI);
  boxCountainer.append(newDiv);
  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
}

function sumbitSave() {
  getNewElem();
}

inputElem.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (inputElem.value) {
      getNewElem();
    }
  }
});

saveElemnt.addEventListener("click", sumbitSave);
modalButton.addEventListener("click", showModal);
closeModall.addEventListener("click", hideModal);
clear.addEventListener("click", clearbox);
// trashElement.addEventListener("click", removeContainer);

function showModal() {
  parentModall.style.display = "block";
  // box.style.filter.blur('20px')
}

function hideModal() {
  parentModall.style.display = "none";
  //    box.style.filter.blur("0px");
}

function clearbox() {
  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
}
