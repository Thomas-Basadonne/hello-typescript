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
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Thomas",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// Possiamo dare un Type specifico per gli array o dare any[] per un array misto
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);
// Aver specificato che è un array di stringhe ci permette di accedere senza problemi a tutte le funzioni specifiche delle stringhe
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); // !!! Errore perche map non è per le stringhe
}

if (person.role === Role.ADMIN) {
  console.log("Sei admin");
}
