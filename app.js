// * OGGETTI
//TS si arrabbia se proviamo ad accedere ad un valore dell'oggetto inesistente
//le parentesi graffe servono per specificare il Type delle info contenute dall'oggetto
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role:[number, string]; //? Qui stiamo definendo un Tuple (array con lunghezza e Type fissi)
// }
// Senza specificare TS lo capisce da solo
// const person = {
//   name: "Thomas",
//   age: 22,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// Enum primo custom type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Thomas",
    age: 22,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// Possiamo dare un Type specifico per gli array o dare any[] per un array misto
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
// Aver specificato che è un array di stringhe ci permette di accedere senza problemi a tutte le funzioni specifiche delle stringhe
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // !!! Errore perche map non è per le stringhe
}
if (person.role === Role.ADMIN) {
    console.log("Sei admin");
}
