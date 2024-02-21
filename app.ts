class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Dipartimento: " + this.name);
  }
}

const vendite = new Department("Vendite");
console.log(vendite);

vendite.describe();
