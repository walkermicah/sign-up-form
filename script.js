"use strict";

const signUpLink = document.querySelector(".form__link-sign-up");
const logInLink = document.querySelector(".form__link-log-in");

const signUpForm = document.querySelector(".form__sign-up");
const logInForm = document.querySelector(".form__log-in");

signUpLink.addEventListener("click", () => {
  signUpForm.classList.remove("hidden");
  logInForm.classList.add("hidden");
});

logInLink.addEventListener("click", () => {
  signUpForm.classList.add("hidden");
  logInForm.classList.remove("hidden");
  console.log("hello");
});
