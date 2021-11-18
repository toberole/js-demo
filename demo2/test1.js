#!/usr/bin/env node

function test1() {
    console.log("test1 " + arguments.length);
}

test1();

function test2(){
    return 1;
}

console.log(test2());
