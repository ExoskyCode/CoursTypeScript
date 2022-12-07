"use strict";
// TODO ________ INTERSECTION TYPES ________ TODO //
const shark1 = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200,
};
const redRose = {
    pollen: true,
    type: "vegetal",
    color: "Blue",
    thorn: true,
};
const automaticResponse = (country) => {
    if (country.lang === "JA") {
        console.log("Hello Japan");
    }
    else if (country.lang === "IT") {
        console.log("Hello Italy");
    }
};
const Japanese1 = {
    lang: "JA",
    food: ["Ramen", "sushis"],
};
automaticResponse(Japanese1);
const spainTrip = {
    john: { id: 1 },
    top: { id: 2 },
    julia: { id: 3 },
};
