"use strict";
//--- Variables
let num1 = 1;
let num2;
let numberOrString;
let nom;
nom = 'toto';
num2 = 22;
num2 = 44;
//Tableaux
let arr = ['chien', 'chat', 'poisson'];
let tableau = [];
let tableau2 = [];
tableau2.push(false);
tableau2.push(24);
// tableau2.push('fdgfbddrfg') renvoie une erreur
console.log(tableau2);
const zidane = {
    id: 0,
    name: "Zidane",
    surname: "Zizou",
    jersey: 10,
};
const sayName = () => {
    console.log(zidane.surname);
};
sayName();
//--- Classes
class Singer {
    // "alive" est optionnel, pensé à "?"
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, 'Prince');
console.log(prince);
//--- Fonctions 
const sayMyName = (name) => {
    console.log(`Bonjour, ${name}`);
};
sayMyName('toto');
const ageDuCaptaine = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size}cm et il 
        est agé de : ${age} ans.`);
    }
    else {
        console.log(`Le capitaine est agé de ${age} ans.`);
    }
};
//"void" n'attend aucun retour de type de données particulier de la fonction.
ageDuCaptaine(55);
//--- Enum et Tuple
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["prenium"] = 1] = "prenium";
    Role[Role["basic"] = 2] = "basic";
})(Role || (Role = {}));
const user1 = {
    name: "toto",
    attributes: [22, 'ans'],
    role: Role.admin
};
console.log(user1.role);
if (user1.role === Role.admin) {
    console.log('connexion spéciale');
}
