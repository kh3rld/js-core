const is = {
    num(n) {
        return typeof n === "number";
    },
    nan(n) {
        return Number.isNaN(n);
    },
    str(s) {
        return typeof s === "string";
    },
    bool(b) {
        return typeof b === "boolean";
    },
    undef(u) {
        return typeof u === "undefined";
    },
    def(d) {
        return typeof d !== "undefined";
    },
    arr(a) {
        return Array.isArray(a);
    },
    obj(o) {
        return o !== null && typeof o === "object" && !Array.isArray(o) && !this.fun(o);
    },
    fun(f) {
        return typeof f === "function";
    },
    truthy(value) {
        return !!value;
    },
    falsy(value) {
        return !value;
    }
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
