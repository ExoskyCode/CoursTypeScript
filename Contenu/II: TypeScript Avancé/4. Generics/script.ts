// TODO ______ INTERFACES REUTILISABLES ______ TODO // 

interface City<T>{
    name: string,
    pop: number;
    additionnelData: T;
}

const London: City<object> = {
    name: "London",
    pop: 10,
    additionnelData: {area: 1572}
}

// ? Generics permet d'utiliser un argument pour une key qui est définie par l'argument appelant, ici City<object> dis que "T" est object, donc additionnelData à pour value un object

// TODO ______ WITH FUNCTIONS ______ TODO // 

const addRepairDate = <T> (obj: T) => {
    const lastRepair = new Date()
    return {...obj, lastRepair}
}

const auto1 = addRepairDate({model: "A7", km: 7000, price: 60000})

// ? Permet d'accéder aux keys/ values de l'objet auto1