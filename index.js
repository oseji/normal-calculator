"use strict";

const btnNumber = document.querySelectorAll(".number-button");
const otherSpecialButtons = document.querySelectorAll(".other-special-buttons");
const outputDisplay = document.querySelector(".output-display");
const btnSection = document.querySelector(".button-section");

//symbols
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const decimalPoint = document.getElementById("decimal-point");

const reset = document.querySelector(".reset");
const deleteBtn = document.querySelector(".del-button");
const equals = document.querySelector(".equals");

//slider components
const themeSlider = document.querySelector(".theme-slider");
const sliderDot = document.querySelector(".slider-dot");
const themeOne = document.querySelector(".theme-one");
const themeTwo = document.querySelector(".theme-two");
const themeThree = document.querySelector(".theme-three");
const body = document.querySelector("body");
const themeSection = document.querySelector(".theme-section");
const appName = document.querySelector(".app-name");

//slider code
//theme 1
themeOne.addEventListener("click", function () {
  body.style.backgroundColor = "rgb(51 65 85 )";
  themeSection.style.color = "white";
  themeSlider.style.backgroundColor = "rgb(30 41 59)";
  sliderDot.style.backgroundColor = "rgb(220 38 38)";
  appName.style.color = "white";
  outputDisplay.style.backgroundColor = "rgb(15 23 42)";
  outputDisplay.style.color = "white";
  btnSection.style.backgroundColor = "rgb(30 41 59 )";
  btnNumber.forEach(function (i) {
    i.style.backgroundColor = "rgb(203 213 225)";
    i.style.color = "rgb(51 65 85 )";
  });
  otherSpecialButtons.forEach(function (i) {
    i.style.backgroundColor = "#E3E3E3";
    i.style.color = "#3B3B3B";
  });
  reset.style.backgroundColor = "rgb(7 89 133)";
  deleteBtn.style.backgroundColor = "rgb(7 89 133)";
  equals.style.backgroundColor = "rgb(220 38 38)";
});

//theme 2
themeTwo.addEventListener("click", function () {
  body.style.backgroundColor = "#E3E3E3";
  themeSection.style.color = "black";
  themeSlider.style.backgroundColor = "#D0CFCF";
  sliderDot.style.backgroundColor = "#EF932B";
  appName.style.color = "black";
  outputDisplay.style.backgroundColor = "white";
  outputDisplay.style.color = "black";
  btnSection.style.backgroundColor = "#D0CFCF";
  btnNumber.forEach(function (i) {
    i.style.backgroundColor = "#E3E3E3";
    i.style.color = "#3B3B3B";
  });
  otherSpecialButtons.forEach(function (i) {
    i.style.backgroundColor = "#E3E3E3";
    i.style.color = "#3B3B3B";
  });
  reset.style.backgroundColor = "#45ADB0";
  deleteBtn.style.backgroundColor = "#45ADB0";
  equals.style.backgroundColor = "#E9A95F";
});

//theme 3
themeThree.addEventListener("click", function () {
  body.style.backgroundColor = "#260124";
  themeSection.style.color = "#F2FE3F";
  themeSlider.style.backgroundColor = "#511480";
  sliderDot.style.backgroundColor = "#21CEE9";
  appName.style.color = "#F2FE3F";
  outputDisplay.style.backgroundColor = "#511480";
  outputDisplay.style.color = "#F2FE3F";
  btnSection.style.backgroundColor = "#511480";
  btnNumber.forEach(function (i) {
    i.style.backgroundColor = "#5E005B";
    i.style.color = "#F2FE3F";
  });
  otherSpecialButtons.forEach(function (i) {
    i.style.backgroundColor = "#5E005B";
    i.style.color = "#F2FE3F";
  });
  reset.style.backgroundColor = "#9F009A";
  deleteBtn.style.backgroundColor = "#9F009A";
  equals.style.backgroundColor = "#E9A95F";
});

let num1 = [];
let num2 = [];

btnNumber.forEach(function (i) {
  i.addEventListener("click", function (e) {
    e.preventDefault();

    num1.push(i.textContent);
    console.log(num1);
    const numberOne = Number(num1.join(""));
    console.log(numberOne);
    outputDisplay.textContent = numberOne;
  });
});

plus.addEventListener("click", function (e) {
  e.preventDefault();

  num1;
});
