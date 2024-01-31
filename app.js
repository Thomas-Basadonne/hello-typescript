//* UNION TYPE
// come essere piu flessibile sui type
//per accettare 2 o piu tipi di valori usiamo |
function combine(input1, input2, resultConvertion //literal type combinato con un union type
) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConvertion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if (resultConvertion === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
var combinedAges = combine(20, 30, "as-number");
console.log(combinedAges);
var combinedName = combine("Thomas", "Elena", "as-text");
console.log(combinedName);
//Literl Types
var CombinedStringAges = combine("30", "26", "as-number");
console.log(CombinedStringAges);
