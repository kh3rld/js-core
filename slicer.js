/*
Instructions

Create a function named slice that works like Array.slice() and String.slice().

It takes 3 arguments:

    string or array to process.
    starting index.
    optional ending index.

 */

function slice(str, s, e) {
    if (s < 0) {
        s = Math.max(0, (str.length + s))
    } else {
        s = Math.min(str.length, s)
    }
    if (e === undefined) {
        e = str.length
    } else if (e < 0) {
        e = Math.max(0, (str.length + e))
    } else if (e > 0) {
        e = Math.min(str.length, s)
    }
    let r = "";
    if (str === 'string') {
        r = ""
        for (let i = s; i < e; i++) {
            r += str[i];
        }
    }
    if (Array.isArray(str)) {
        r = []
        for (let i = s; i < e; i++) {
            r.push(str[i]);
        }
    }
    return r
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(slice(animals, -2));