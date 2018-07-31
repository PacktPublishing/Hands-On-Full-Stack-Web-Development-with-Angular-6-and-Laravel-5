console.log('First Sample With TypeScript');
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.sum = function (x, y) {
        console.log('Number is: ', x + y);
        return x + y;
    };
    return MyClass;
}());
MyClass.sum(2, 5);
