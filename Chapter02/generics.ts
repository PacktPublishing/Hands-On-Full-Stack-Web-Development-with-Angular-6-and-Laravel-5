function genericFunction<T>(arg: T): T[] {
    let myGenericArray: T[] = [];
    myGenericArray.push(arg);
    return myGenericArray;
}
let stringFromGenericFunction = genericFunction<string>("Some string goes here");
console.log(stringFromGenericFunction[0]);
let numberFromGenericFunction = genericFunction(190);
console.log(numberFromGenericFunction[0]);
