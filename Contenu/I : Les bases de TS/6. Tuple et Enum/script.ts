// TODO ________ TUPLES ________ TODO //

let tuple: [boolean, number] // ? Type array : let tuple: [boolean, number], ce qui signifie que tuple est pour l'instant undefined mais qu'il pourra par la suite contenir un array de seulement deux valeurs, et que la première sera un boolean, et la deuxième un number
tuple= [false, 20] // ? Fonctionne car le type des valeurs correspond aux types attendus par let tuple: [boolean, number] et que le premier est bien un boolean et le deuxième bien un number
// ! tuple = [20, false] Ne fonctionne pas car la première valeur est un number et la deuxième est un boolean alors que let tuple: [boolean, number] attends l'inverse
// ! tuple= [false, "20"] Ne fonctionne pas car le type des valeurs ne correspond pas aux types attendus par let tuple: [boolean, number]
// ! tuple= [false, "20", [1, 2, 3]] Ne fonctionne pas car le type des valeurs ne correspond pas aux types attendus par let tuple: [boolean, number] et qu'il y a trois valeurs données alors que let tuple: [boolean, number] n'en autorisent que deux

// TODO ________ ENUM ________ TODO //

enum roles { JAVASCRIPT, CSS, REACT } 