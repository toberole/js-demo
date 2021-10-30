// 输出log到控制台
console.log("hello js")

// 函数调用
console.log(add(1, 2))

// var 变量
var i;
i = 10;
console.log(i)

// 未赋值的变量 undefined
var ii
console.log(ii)

// 重新声明变量 其值不变
var str = "hello var"
var str
console.log(str)

// js数据类型是动态类型
var t = 100;
console.log(t)
t = "动态数据类型"
console.log(t)

// 布尔类型
var b = true
console.log(b)
var bb = false
console.log(bb)

// 数组
var arr = [1, 2, 3, 4]
arr.forEach(element => {
    console.log(element)
});
// 数组
var arr1 = new Array();
arr1[0] = "js"
arr1[1] = "java"
arr1.forEach(element => {
    console.log(element)
});

// 对象
var obj = {
    name: "hello obj",
    age: 11,

    getAge: function () {
        return this.age;
    },

    getName: function () {
        return this.name;
    }
}
// 访问属性
console.log(obj.name + " " + obj.age)
console.log(obj["name"] + " " + obj["age"])
console.log(obj.getAge() + " " + obj.getName())
// 函数作为属性访问
console.log(obj.getAge + " " + obj.getName)

// 声明变量类型
// 使用关键词 "new" 来声明其类型
// JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象
var carname = new String;
var x = new Number;
var y = new Boolean;
var cars = new Array;
var person = new Object;

// Undefined 和 Null
// Undefined 这个值表示变量不含有值
// 可以通过将变量的值设置为 null 来清空变量

// 函数
function add(a, b) {
    return a + b;
}

// 全局变量
var g_vv = 2000
console.log(g_vv)

// typeof 操作符
// typeof "John"                // 返回 string 
// typeof 3.14                  // 返回 number
// typeof false                 // 返回 boolean
// typeof [1,2,3,4]             // 返回 object
// typeof {name:'John', age:34} // 返回 object
// typeof null                  // 返回 object
console.log(typeof null)
var undefined_var;
console.log(typeof undefined_var)// 返回 undefined

var str = "hello js"
console.log(str.constructor)

// 异常捕获
function div_(a, b) {
    try {
        return a / b
    } catch (error) {
        console.log(error)
    } finally {
        console.log("finally")
    }
}

/**
 * this
JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。
在方法中，this 表示该方法所属的对象。
如果单独使用，this 表示全局对象。
在函数中，this 表示全局对象。
在函数中，在严格模式下，this 是未定义的(undefined)。
在事件中，this 表示接收事件的元素。
类似 call() 和 apply() 方法可以将 this 引用到任何对象。
 */

// 函数表达式
var fun = function (a, b) {
    return a + b;
};

console.log(fun(1, 2))

// Function() 构造函数
var fun1 = new Function("a", "b", "return a+b");
console.log(fun1(1, 2));

var str_0 = "hello"
console.log(str_0.length)

// 创建对象
// 创建新对象有两种不同的方法：
// 定义并创建对象的实例
// 使用函数来定义对象，然后创建新的对象实例
// 创建直接的实例
var cat = new Object();
cat.name = "tom";
cat.weight = 10;
// 替代语法
var cat1 = { name: "tom", weight: 10 };

// 使用对象构造器
function cat0(name, weight) {
    this.name = name;
    this.weight = weight;
}
// 使用对象构造器创建对象实例
var cat2 = new cat0("tom", 10);
console.log(cat2.name + "  " + cat.weight);
// 给对象添加属性
cat2.name1 = "hello";
console.log(cat2.name + "  " + cat.weight + "  " + cat2.name1);

// 使用对象构造器 添加方法
function cat_0(name, age) {
    this.name = name;
    this.age = age;

    function sys() {
        console.log(name + "  " + age)
    }
}

// JavaScript for...in 循环
// JavaScript for...in 语句循环遍历对象的属性。
var cat00 = new cat_0("", 100);
for (const key in cat00) {
    if (cat00.hasOwnProperty(key)) {
        const element = cat00[key];
        console.log(key + "  " + element)
    }
}

// prototype 继承
// 所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法：
// Date 对象从 Date.prototype 继承。
// Array 对象从 Array.prototype 继承。
// Person 对象从 Person.prototype 继承。
// 所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。
// JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，
// 它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，
// 依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 使用 prototype 属性就可以给对象的构造函数添加新的属性
Person.prototype.second_name = "hello";
// 使用 prototype 属性就可以给对象的构造函数添加新的方法
Person.prototype.second_name1 = function(){
    return "hello hh";
}


























































