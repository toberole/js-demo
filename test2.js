// import { Student } from './Student'

console.log("hello test2 ......");

// let stu = Stuent("123", 110);
// stu.printStu()

function test1(a, b) {
    return a + b;
}

console.log(test1(1, 2))

// 创建对象 方式一
var o1 = new Object();
// 创建对象 方式二 类似map 对象字面量（object literal）
var o2 = {};

// “对象字面量”也可以用来在对象实例中定义一个对象
var o3 = {
    name: "Carrot",
    _for: "Max",//'for' 是保留字之一，使用'_for'代替
    details: {
        color: "orange",
        size: 12
    }
};
console.log(o3.details.color);
// map形式访问
console.log(o3["details"]["size"]);

// 创建了一个对象原型 Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log("name: " + this.name + ",age: " + this.age);
    }
}
// 定义一个对象
var You = new Person('You', 24);
console.log(You.name);
You.printStu;









