// TODO ________ L'OPÉRATEUR "!" ________ TODO //

const container = document.querySelector('.container')!

// ? Le "!" à la fin de la variable signifie que ça returnera jamais NULL

// TODO ________ L'OPÉRATEUR "?" ________ TODO //

type Job = {
    title: string;
    description? : string;
    salary: number
}
const user1: Job = {
    title: "Def FrontEnd",
    description: "Développeur de sites web",
    salary: 30000
}
const user2: Job = {
    title: "Def FrontEnd",
    description: "Développeur de sites web",
    salary: 30000
}

// ? Le "?" signifie que l'élément est optionnel, s'il n'est aps renseigné, ça ne bugera pas ( marche avec les arguments, les interfaces, les objets)