type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//intersection type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "max",
  privileges: ["create-server"],
  startDate: new Date(),
};

//union type
type Conbinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function add2(a: Conbinable, b: Conbinable) {
  //typeguard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("name: " + emp.name);
  // in è una key word js che permette di controllare se il valore è presente
  if ("privileges" in emp) {
    console.log("privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Datee: " + emp.startDate);
  }
}
//discriminated union

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("velocità: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });

const paragraph = document.querySelector("p");

interface ErrorContainer {
  //email:'email non valida'
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  email: "email non valida",
  username: "almeno 4 caratteri",
};


//function overloads