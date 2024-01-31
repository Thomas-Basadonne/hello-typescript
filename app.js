// Modulo 1 Tipizzazione in Typescript.
//La differenza chiave è che JS usa tipi dinamici che possono cambiare mentre TS usa tipi statici devisi durante il development
// Si può specificare il tipo di dato che si aspetta di ricevere
function add(n1, n2, showResult, resultPhrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
// Typescript controlla se i valori sono esatti altrimenti ci avverte dell'errore
//NUMERI In JS non cè differenza tra interi e float 5 === 5.0
var number1 = 5;
var number2 = 4;
//BOOLEANO
var printResult = true;
//STRINGA
var resultPhrase = "Result is:";
add(number1, number2, printResult, resultPhrase);
