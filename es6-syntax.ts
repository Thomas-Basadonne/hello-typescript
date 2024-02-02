//next gen js syntax ES&
const myName = "Thom";
// let age = 22;

// const addArrow = (a: number, b: number) => {
//   return a + b;
// };
// se hai una sola operazione puoi farla abbreviata, inoltre puoi aggiungere un valore di default direttamente nella funzione
const addArrow = (a: number, b: number = 1) => a + b;
//è importante che il valore definito non sia il primo altrimenti da errore
addArrow(5);

//spread operetor

const hobbies = ["Fishing", "Videogame"];
const activeHobbies = ["Hiking"];
//dice a js di tirare fuori tutti gli elementi in hobbies e di pusharli in activeHobbies
activeHobbies.push(...hobbies);

const human = {
  firstName: "Thom",
  age: 22,
};
//Facendo cosi non copiamo in se l'oggetto ma solo il suo contenuto per questo possiamo usare const.
// const copiedHuman = human;

// con lo spread tira fuori tutti i valori key di human e li ricopia facendo quindi una copia identica dell'oggetto
const copiedHuman = { ...human };

//rest param. molto utile utilizzando lo spread si possono accettare un numero indefinito di valore in una funzione. anche push usa questo metodo.
const addRest = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = addRest(5, 8, 12);
console.log(addedNumbers);

//array destructuring
// const hobby1 = hobbies[0];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

//obj destructuring
//tra le parentesi devi usare i key name usati nell'oggetto principale. se voglio rinominarli devo usare un alias { firstName: userName, age }
const { firstName, age } = human; 
