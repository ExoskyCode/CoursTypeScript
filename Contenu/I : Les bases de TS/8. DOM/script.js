"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const form = $('.form--container');
const input = $('input');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMITTED");
}
window.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
const paragraphsList = $$('p');
