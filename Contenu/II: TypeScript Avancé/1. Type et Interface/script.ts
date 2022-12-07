// TODO ________ INTERSECTION TYPES ________ TODO //

type Fish = {
  fin: number;
  element: "water";
  gills: true;
};
type Shark = {
  weight: number;
  length: number;
};
type HammerheadShark = Fish & Shark;

const shark1: HammerheadShark = {
  fin: 3,
  element: "water",
  gills: true,
  weight: 500,
  length: 200,
};
// ? On peut faire un type qui est le résultat de deux types ajoutés

// TODO ________ INTERSECTION INTERFACES ________ TODO //

interface Flower {
  pollen: true;
  type: "vegetal";
}
interface Rose extends Flower {
  color: string;
  thorn: boolean;
}

const redRose: Rose = {
  pollen: true,
  type: "vegetal",
  color: "Blue",
  thorn: true,
};
// ? On peut lier des interfaces entre elles

// TODO ________ UNION DISCRIMINANTE ________ TODO //

type Japan = {
  lang: "JA";
  food: string[];
};
type Italy = {
  lang: "IT";
  food: string[];
};
type Country = Japan | Italy;

const automaticResponse = (country: Country) => {
  if (country.lang === "JA") {
    console.log("Hello Japan");
  } else if (country.lang === "IT") {
    console.log("Hello Italy");
  }
};
const Japanese1: Country = {
  lang: "JA",
  food: ["Ramen", "sushis"],
};
automaticResponse(Japanese1);

// TODO ________ UNKNOWN NUMBER OF PROPS ________ TODO //

interface Group {
  [name: string]: object;
}
const spainTrip: Group = {
    john: {id: 1},
    top: {id: 2},
    julia: {id: 3},
}
