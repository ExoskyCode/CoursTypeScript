// TODO ________ TABLEAUX ________ TODO //

const fruits = ['fraise', 'pomme'] // ? Type stringArray : const fruits: string[], ce qui signifie que fruits est un array de strings
// ! fruits.push(4) Ne fonctionne pas car fruits et un tableau de strings
fruits.push('orange') // ? Fonctionne car on ajoute un string à un array de strings

const mixedArray = [1, 'txt', [1,2,3]] // ? Type UNION : const mixedArray: (string | number | number[])[], ce qui signifie que mixedArray peut contenir: un nombre, un string, un    array de nombres
mixedArray.push([4,5,6]) // ? Fonctionne car on ajoute un array
// ! mixedArray.push([4,5,"6"]) Ne fonctionne pas car on ajoute un array qui ne contient pas uniquement des nombres

let nums : number[]; // ? Type numberArray : let nums: number[], ce qui signifie que nums est pour l'instant undefined mais qu'il pourra contenir seulement un array de nombres
// ! nums = ["a", "b"] Ne fonctionne pas car on attribu un array de strings alors que nums est de type number[] (array of numbers)
nums = [1, 2] // ? Fonctionne car on attribu un array de numbers et que nums est de type number[] (array of numbers)
// ! nums.push(1) Ne fonctionne pas car on essaye de push quelque chose à nums alors que nums est encore undefined

let nums2 : number[] = [] // ? Type numberArray : let nums2: number[], ce qui signifie que nums2 est pour l'instant un array vide mais qu'il pourra contenir seulement des nombres
nums2.push(1, 2, 3) // ? Fonctionne car on push des numbers dans une variable (nums2) qui est un array de numbers
// ! nums2.push("1", "2", "3") Ne fonctionne pas car on push des strings dans une variable (nums2) qui est un array de numbers

// * POUR DEFINIR UN ARRAY DE N'IMPORTE QUEL TYPE

let random: any[] // ? Type anyArray : let random: any[], ce qui signifie que random est pour l'instant undefined mais qu'il pourra contenir un array avec des valeurs de n'importe quel type

// TODO ________ OBJETS ________ TODO //

const car = {
    name: "Audi",
    model: "RS7",
    km: 1000,
} // ? Type object : const car: { name: string; model: string; km: number;}, ce qui signifie que car est un object de strings et numbers
car.model = "A7" // ? Fonctionne car on attribu à la key model une valeur string et que la key model attend une valeur string
// ! car.model = 4 Ne fonctionne pas car on essaye d'attribuer à la key model une valeur number, alors que la key model attend une valeur string

let profile: {
    name: string,
    age: number 
} // ? Type object : let profile: { name: string; age: number;}, ce qui signifie que profile est pour l'instant undefined mais qu'il pourra contenir un object avec deux keys: name qui sera un string, et age qui sera un number

profile = {
    name: "John",
    age: 85,
} // ? Fonctionne car on attribu à la variable profile une valeur object et que ses keys sont de même type que les keys attendues par let profile: { name: string; age: number;}
// ! profile = { name: 20, age: "85", } Ne fonctionne pas car on attribu à la variable profile une valeur object et que ses keys ne sont pas de même type que les keys attendues par let profile: { name: string; age: number;}
// ! profile = { name: "John", age: 85, sport: "Foot" } Ne fonctionne pas car on attribu à la variable profile une valeur object et qu'une de ses keys ne fait pas partie des keys attendues par let profile: { name: string; age: number;}

let obj: object; // ? Type object : let obj: object, ce qui signifie que obj est pour l'instant undefined mais qu'il pourra contenir un object 

obj = {
    name: "John",
    age: 85
} // ? Fonctionne car on attribu à la variable obj une valeur object et que obj attends bien une valeur de type object
// ! obj = 10 Ne fonctionne pas car on attribu à la variable obj une valeur avec un type différent que celui attendu par let obj: object
