"use strict";
const fruits = ['fraise', 'pomme'];
// ! fruits.push(4) Ne fonctionne pas car fruits et un tableau de strings
fruits.push('orange'); // ? Fonctionne car on ajoute un string à un array de strings
const mixedArray = [1, 'txt', [1, 2, 3]]; // ? type UNION : const mixedArray: (string | number | number[])[] ce qui signifie que mixedArray peut contenir: un nombre, un string, un    array de nombres
mixedArray.push([4, 5, 6]); // ? Fonctionne car on ajoute un array
// ! mixedArray.push([4,5,"6"]) Fonctionne pas car on ajoute un array qui ne contient pas uniquement des nombres
let nums; // ? type number : let nums: number[] ce qui signifie que nums est pour l'instant undefined mais qu'il pourra contenir seulement un array de nombres
