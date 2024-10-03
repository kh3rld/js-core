/*
Instructions

Create 3 functions which each take (a, b) as arguments:

    multiply that acts like the * operator, without using it.
    divide that acts like the integer division operator /, without using it.
    modulo that acts like the % operator, without using it.

 */

function multiply(a, b) {
    let r = 0;
    let isN = b < 0
    if (b < 0) {
        b = Math.abs(b)
    }
    for (let i = 0; i < b; i++) {
        r += a
    }
    return isN ? -r : r
}

function divide(a, b) {
    let r = 0;
    let c = 0
    let isN = ((a < 0) !== (b < 0) );
    b = Math.abs(b)
    a = Math.abs(a)
    while (a >=b){
        a -= b
        c++
    }
    return isN ? -c : c
}

function modulo(a, b) {
    let div = divide(a,b)
    return a - multiply(div,b)
 }
console.log(multiply(3, -4))
console.log(divide(15,3))
console.log(modulo(10,3))