var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Dipartimento: " + this.name);
    };
    return Department;
}());
var vendite = new Department("Vendite");
console.log(vendite);
vendite.describe();
