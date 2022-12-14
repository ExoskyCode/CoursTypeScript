const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const form = $('.form--container') as HTMLFormElement
const input = $('input') as HTMLInputElement

form.addEventListener('submit', handleSubmit)

function handleSubmit(event: Event){
    event.preventDefault()
    console.log("SUBMITTED");
}

window.addEventListener('click', handleClick)

function handleClick(event: MouseEvent){
    console.log(event.clientX, event.clientY);
}

const paragraphsList = $$('p')