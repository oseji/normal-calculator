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
  });
  otherSpecialButtons.forEach(function (i) {
    i.style.backgroundColor = "#E3E3E3";
  });
  reset.style.backgroundColor = "#45ADB0";
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
