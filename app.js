var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//next gen js syntax ES&
var myName = "Thom";
// let age = 22;
// const addArrow = (a: number, b: number) => {
//   return a + b;
// };
// se hai una sola operazione puoi farla abbreviata, inoltre puoi aggiungere un valore di default direttamente nella funzione
var addArrow = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
//è importante che il valore definito non sia il primo altrimenti da errore
addArrow(5);
//spread operetor
var hobbies = ["Fishing", "Videogame"];
var activeHobbies = ["Hiking"];
//dice a js di tirare fuori tutti gli elementi in hobbies e di pusharli in activeHobbies
activeHobbies.push.apply(activeHobbies, hobbies);
var human = {
    firstName: "Thom",
    age: 22,
};
//Facendo cosi non copiamo in se l'oggetto ma solo il suo contenuto per questo possiamo usare const.
// const copiedHuman = human;
// con lo spread tira fuori tutti i valori key di human e li ricopia facendo quindi una copia identica dell'oggetto
var copiedHuman = __assign({}, human);
//rest param. molto utile utilizzando lo spread si possono accettare un numero indefinito di valore in una funzione. anche push usa questo metodo.
var addRest = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = addRest(5, 8, 12);
console.log(addedNumbers);
//array destructuring
// const hobby1 = hobbies[0];
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
//obj destructuring
//tra le parentesi devi usare i key name usati nell'oggetto principale. se voglio rinominarli devo usare un alias { firstName: userName, age }
var firstName = human.firstName, age = human.age;
