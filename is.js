/*
Instructions

Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.

    is.num: value is a number.
    is.nan: value is NaN.
    is.str: value is a string.
    is.bool: value is a boolean.
    is.undef: value is undefined.
    is.def: value is defined.
    is.arr: value is an array.
    is.obj: value is a simple object or null objects.
    is.fun: value is a function.
    is.truthy: value is truthy.
    is.falsy: value is falsy.

Examples

console.log(is.num(5))
// output: true

console.log(is.num('ciao'))
// output: false

*/
const is = {};

is.num = function (n) {
    return typeof n === "number";
};

is.nan = function (n) {
    return Number.isNaN(n);
};

is.str = function (s) {
    return typeof s === "string";
};

is.bool = function (b) {
    return typeof b === "boolean";
};

is.undef = function (u) {
    return typeof u === "undefined";
};

is.def = function (d) {
    return typeof d !== "undefined";
};

is.arr = function (a) {
    return Array.isArray(a);
};

is.obj = function (o) {
    return o !== null && typeof o === "object" && !Array.isArray(o);
};

is.fun = function (f) {
    return typeof f === "function";
};

is.truthy = function (t) {
    return !!t;
};

is.falsy = function (f) {
    return !f;
};

console.log(is.num(10));
console.log(is.nan(NaN));
console.log(is.str('ciao'));
console.log(is.bool(true));
console.log(is.undef(undefined));
console.log(is.def(null));
console.log(is.arr([1, 2, 3]));
console.log(is.obj({}));
console.log(is.fun(function () { }));
console.log(is.truthy(1));
console.log(is.falsy(0)); 
