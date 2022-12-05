"use strict";
function multiply(num1, num2) {
    return num1 * num2;
} // ? Type function : function multiply(num1: number, num2: number): number, ce qui signifie que multiply est une fonction avec deux arguments de type number: num1 et num2
console.log(multiply(6, 10)); // ? Fonctionne car les arguments dans multiply sont de même type que ceux attendus par multiply
// ! console.log(multiply("6", "10")); Ne fonctionne pas car les arguments dans multiply ne sont pas de même type que ceux attendus par multiply
// * POUR DIRE QU'UN ARGUMENT EST OPTIONNEL 
function multiply2(num1, num2, action) {
    return num1 * num2;
} // ? Type function : function multiply2(num1: number, num2: number, action?: string): number, ce qui signifie que multiply2 est une fonction avec trois arguments de type number: num1 et num2, et un argument de type string: action, mais que celui-ci est optionnel
console.log(multiply2(6, 10)); // ? Fonctionne car l'argument action est optionnel
let foo; // ? Type function : let foo: Function, ce qui signifie que foo est pour l'instant undefined, mais qu'il pourra par la suite contenir seulement une fonction
foo = () => { }; // ? Fonctionne car on attribu à la variable foo une valeur du même type que celui attendu par let foo: Function 
// ! foo = 5 Ne fonctionne pas car on attribu à la variable foo une valeur de type différent que celui attendu par let foo: Function f
// * FUNCTION SIGNATURES
let baz; // ? Type function : let baz: (a: number, b: number) => number, ce qui signifie que baz est pour l'instant undefined, mais qu'il pourra par la suite contenir seulement une fonction avec deux arguments de type number, et qui retournera une valeur de type number
baz = (a, b) => a + b; // ? Fonctionne car le type des arguments et du return correspondent à ceux attendus par let baz: (a: number, b: number) => number
// * FUNCTION CALLBACK
function greetings(fn) {
    fn("Hello world");
} // ? Type function : function greetings(fn: (a: string) => void): void, ce qui signifie que greetings est une fonction qui peut contenir uniquement une fonction qui à pour argument un string et qui return void
function printToConsole(msg) {
    console.log(msg);
} // ? Type function : function printToConsole(msg: string): void, ce qui signifie que printToConsole est une fonction qui a pour argument un string
greetings(printToConsole);
