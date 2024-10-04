/*
Instructions

Create a function named slice that works like Array.slice() and String.slice().

It takes 3 arguments:

    string or array to process.
    starting index.
    optional ending index.

 */
Array.prototype.slice = undefined
String.prototype.slice = undefined
function slice(arr, s, e) {
    if (s < 0) {
        s = Math.max(0, arr.length + s);
    } else {
        s = Math.min(arr.length, s);
    }
    if (e === undefined) {
        e = str.length;
    } else if (e < 0) {
        e = Math.max(0, arr.length + e);
    } else {
        e = Math.min(arr.length, e);
    }
    let r;
    if (typeof arr === 'string') {
        r = '';
        for (let i = s; i < e; i++) {
            r += arr[i];
        }
    } else if (Array.isArray(arr)) {
        r = [];
        for (let i = s; i < e; i++) {
            r.push(arr[i]);
        }
    } else {
        throw new TypeError("Invalid Input")
    }
    return r;
}
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const arr = "Kherld"
console.log(slice(arr, 0, 2))
console.log(slice(animals, 0, 2));
