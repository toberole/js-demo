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