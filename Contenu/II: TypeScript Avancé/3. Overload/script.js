"use strict";
// ? Overload gère tous les retours de la fonction
// ! Si les args sont autre que les args attendues alors => erreur
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
