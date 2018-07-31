console.log('First Sample With TypeScript');

class MyClass {
    public static sum(x: number, y: number) {
        console.log('Number is: ', x + y);
        return x + y;
    }
}
MyClass.sum(2, 5);
