//--- Variables
let num1 = 1;
let num2:number;
let numberOrString: number | string;
let nom:string;

nom = 'toto';
num2 = 22;
num2 = 44;

//Tableaux
let arr = ['chien', 'chat', 'poisson'];
let tableau: string[] = [];
let tableau2: (number | boolean)[] = [];

tableau2.push(false)
tableau2.push(24)
// tableau2.push('fdgfbddrfg') renvoie une erreur
console.log(tableau2);


//--- Objets
interface Player {
    id: number,
    name: string,
    surname: string,
    jersey: number,
    age?: number 
    // "?" : Permet de déclarer une propriété sans être obligé d'être annoncé dans une instanciation.
}

const zidane:Player = {
    id: 0,
    name: "Zidane",
    surname: "Zizou",
    jersey: 10,
};

const sayName = () => {
    console.log(zidane.surname);
}
sayName();

//--- Classes

class Singer {
    id: number;
    name: string;
    alive?: boolean
    // "alive" est optionnel, pensé à "?"
    constructor(id: number, name: string, alive?: boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}

const prince = new Singer(0, 'Prince')
console.log(prince)

//--- Fonctions 

const sayMyName = (name: string) => {
    console.log(`Bonjour, ${name}`)
}
sayMyName('toto')

const ageDuCaptaine = (age: number | string, size?: number):void => {
    if(size) {
        console.log(`La taille du capitaine est de ${size}cm et il 
        est agé de : ${age} ans.`)
    } else {
        console.log(`Le capitaine est agé de ${age} ans.`);
    }
}

//"void" n'attend aucun retour de type de données particulier de la fonction.

ageDuCaptaine(55)

//--- Enum et Tuple

enum Role {admin, prenium, basic}

interface User {
    name: string;
    attributes: [number, string];
    role: Role
}

const user1: User = {
    name: "toto",
    attributes: [22, 'ans'],
    role: Role.admin
}

console.log(user1.role)

if (user1.role === Role.admin) {
    console.log('connexion spéciale');
}