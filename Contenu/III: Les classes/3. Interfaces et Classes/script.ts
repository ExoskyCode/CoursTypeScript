interface Country {
    name: string;
    population: number;
    lang: string[];
}

class France implements Country {
    constructor(
        public name: string,
        public population: number,
        public lang: string[]
    ) {}
}
const FranceData = new France("France", 70, ["French"])

class Aquitaine extends France {}

const AquitaineData = new Aquitaine("France", 4, ["Français", "Basque", "Gascon"])