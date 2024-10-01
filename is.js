function num(n) {
    return typeof n === "number";
}
function nan(n) {
    return Number.isNaN(n);
};
function str(s) {
    return typeof s === "string";
}
function bool(b) {
    return typeof b === "boolean";
}
function undef(u) {
    return typeof u === "undefined";
}
function def(d) {
    return typeof d !== "undefined";
}
function arr(a) {
    return Array.isArray(a);
}
function obj(o) {
    return o !== null && typeof o === "object" && !Array.isArray(o) && !this.fun(o);
}
function fun(f) {
    return typeof f === "function";
}
function truthy(value) {
    return !!value;
}
function falsy(value) {
    return !value;
}


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
