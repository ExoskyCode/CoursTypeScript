
interface Rocket{
    reactors: number;
    vMax: number;
    takeOff: (action: string) => void
}

interface Rocket {
    price: number;
    carburant: number;
}

// * DIFFERENCES ENTRE INTERFACES ET TYPES

// ? Un type peut être: type rocket = string | number ou type rocket = { a: string | number }
// ? Alors qu'un interface est forcément un object : interface Rocket { price: number; carburant: number; }

// ? On peut merge les interface mais pas les types ( === on peut ajouter de nouvelles propriétées aux interfaces mais pas au types )

class rocketFactory implements Rocket {
    reactors: number;
    vMax: number;
    price: number;
    carburant: number;
    constructor(reactors: number, vMax: number, price: number, carburant: number){
        this.reactors = reactors
        this.vMax = vMax
        this.price = price
        this.carburant = carburant
    }
    takeOff(action: string){
        console.log(action);
        
    }
}
const falcon1 = new rocketFactory(12, 900, 2, 9000)
console.log(falcon1);
falcon1.takeOff('Décollage')