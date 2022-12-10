type NumberOrString = number | string

function combine(a: number, b: number): number
function combine(a: number, b: string): string
function combine(a: string, b: number): string
function combine(a: string, b: string): string

// ? Overload gère tous les retours de la fonction
// ! Si les args sont autre que les args attendues alors => erreur

function combine(a: NumberOrString, b:NumberOrString){
    if (typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    } else {
        return a + b
    }
}