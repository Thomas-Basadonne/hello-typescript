//*Alias Utile per specificare uno union type senza doverli riscrivere ogni volta
type Pippo = string | boolean;
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"; //literal type combinato con un union type gestito da un alias

//* UNION TYPE
// come essere piu flessibile sui type
//per accettare 2 o piu tipi di valori usiamo |
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConvertion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConvertion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConvertion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(20, 30, "as-number");
console.log(combinedAges);

const combinedName = combine("Thomas", "Elena", "as-text");
console.log(combinedName);

//Literl Types
const CombinedStringAges = combine("30", "26", "as-number");
console.log(CombinedStringAges);

// Type Aliases & Object Types
// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To:

// type User = { name: string; age: number };

// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
