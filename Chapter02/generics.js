function genericFunction(arg) {
    var myGenericArray = [];
    myGenericArray.push(arg);
    return myGenericArray;
}
var stringFromGenericFunction = genericFunction("Some string goes here");
console.log(stringFromGenericFunction[0]);
var numberFromGenericFunction = genericFunction(190);
console.log(numberFromGenericFunction[0]);
