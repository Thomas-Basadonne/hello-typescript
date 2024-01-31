function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(4, 12));
//function type che accetta 2 numeri come parametri e rilascia un numero come risultato
var combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
