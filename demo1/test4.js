class Test4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(this.name);
        console.log(this.age)
    }
}

let stu = new Test4("hello", "1");
console.log(stu.age);
console.log(stu.name);

setTimeout(() => {
    console.log("timeout ......")
}, 1000);