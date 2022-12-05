// TODO ________ UNIONS ________ TODO //

let code: string | number; // ? Type string or number : let code: string | number, ce qui signifie que code est pour l'instant undefined mais qu'il pourra pas par la suite contenir soit un string soit un number
code = 6 // ? Fonctionne car le type de la valeur correspond aux types attendus par let code: string | number
code = "6" // ? Fonctionne car le type de la valeur correspond aux types attendus par let code: string | number
// ! code = true Ne fonctionne pas car le type de la valeur ne correspond pas aux types attendus par let code: string | number

let arr: (boolean | number)[] // ? Type booleanArray or numberArray : let arr: boolean | number[], ce qui signifie que arr est pour l'instant undefined mais qu'il pourra pas par la suite contenir soit un array de boolean soit un array de number
arr = [true, false, 999] // ? Fonctionne car le type des valeurs du array correspondent aux types attendus par let arr: boolean | number[]
// ! arr = [true, false, "999"] Ne fonctionne pas car le type des valeurs du array ne correspondent  pasaux types attendus par let arr: boolean | number[]

const foo = (param: (number | string))=> {
    console.log(param);
} // ? Type function : const foo: (param: (number | string)) => void, ce qui signifie que foo est une fonction avec un argument qui est soit number soit string, qui return void et qui log l'argument
foo('Hello world') // ? Fonctionne car le type de l'argument correspond aux types attendus par const foo: (param: (number | string)) => void
foo(100) // ? Fonctionne car le type de l'argument correspond aux types attendus par const foo: (param: (number | string)) => void
// ! foo(true) Ne fonctionne pas car le type de l'argument ne correspond pas aux types attendus par const foo: (param: (number | string)) => void


// TODO ________ CUSTOM TYPES ________ TODO //

type mixedNumStr = (number | string) // ? Signifie que chaque variable qui prendera mixedNumStr comme type, pourra contenir soit un number soit un string
// * EXEMPLE
let mix1: mixedNumStr = 10 // ? Fonctionne car le type de la valeur attribuée à la variable correspond aux types attendus par mixedNumStr
let mix2: mixedNumStr = "10" // ? Fonctionne car le type de la valeur attribuée à la variable correspond aux types attendus par mixedNumStr
// ! let mix3: mixedNumStr = true Ne fonctionne pas car le type de la valeur attribuée à la variable ne correspond pas aux types attendus par mixedNumStr

type element = {
    x: number;
    y: number;
} // ? Signifie que chaque variable qui prendera element comme type, devra contenir un object avec x et y comme keys qui seront de type number
// * EXEMPLE
const button: element = {
    x: 10,
    y: 130,
} // ? Fonctionne car le type de la valeur attribuée à la variable button correspond au type attendu par element et que le type de ses keys correspond lui aussi au type des keys de element
// ! const button2: element = {x: "10", y: "130"} Ne fonctionne pas car le type de la valeur attribuée à la variable button ne correspond pas au type attendu par element et que le type de ses keys ne correspond pas au type des keys de element