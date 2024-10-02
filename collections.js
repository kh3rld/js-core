/**
Instructions

Write a bunch of functions which converts data from one type to another:

    arrToSet: from Array to Set.
    arrToStr: from Array to string.
    setToArr: from Set to Array.
    setToStr: from Set to string.
    strToArr: from string to Array.
    strToSet: from string to Set.
    mapToObj: from Map to Object.
    objToArr: from Object to Array.
    objToMap: from Object to Map.
    arrToObj: from Array to Object.
    strToObj: from string to Object.

Finally, write a function named superTypeOf that unlike typeof returns a specific values for advanced types like Map and Set.
Examples

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

arrToSet(arr) // -> Set { 1, 2, 3 }
arrToStr(arr) // -> '1213'
setToArr(set) // -> [1, 2, 3]
setToStr(set) // -> '123'
strToArr(str) // -> ['h', 'e', 'l', 'l', 'o']
strToSet(str) // -> Set { 'h', 'e', 'l', 'o' }
mapToObj(map) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
objToArr(obj) // -> [45, 75, 24]
objToMap(obj) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
arrToObj(arr) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
strToObj(str) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

superTypeOf(map) //         -> 'Map'
superTypeOf(set) //         -> 'Set'
superTypeOf(obj) //         -> 'Object'
superTypeOf(str) //         -> 'String'
superTypeOf(666) //         -> 'Number'
superTypeOf(NaN) //         -> 'Number'
superTypeOf(arr) //         -> 'Array'
superTypeOf(null) //        -> 'null'
superTypeOf(undefined) //   -> 'undefined'
superTypeOf(superTypeOf) // -> 'Function'
*/

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    return Array.from(set).join('');
}

function strToArr(str) {
    return Array.from(str);
}

function strToSet(str) {
    return new Set(str);
}

function mapToObj(map) {
    const obj = {};
    for (const [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    const obj = {};
    arr.forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
}

function strToObj(str) {
    const obj = {};
    Array.from(str).forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
}

function superTypeOf(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof Set) return 'Set';
    if (value instanceof Map) return 'Map';
    if (typeof value === 'string') return 'String';
    if (typeof value === 'number') return 'Number';
    return typeof value === 'object' ? 'Object' : typeof value;
}

console.log(arrToSet(arr));
console.log(arrToStr(arr));
console.log(setToArr(set));
console.log(setToStr(set));
console.log(strToArr(str));
console.log(strToSet(str));
console.log(mapToObj(map));
console.log(objToArr(obj));
console.log(objToMap(obj));
console.log(arrToObj(arr));
console.log(strToObj(str));

console.log(superTypeOf(map));
console.log(superTypeOf(set));
console.log(superTypeOf(obj));
console.log(superTypeOf(str));
console.log(superTypeOf(666));
console.log(superTypeOf(NaN));
console.log(superTypeOf(arr));
console.log(superTypeOf(null));
console.log(superTypeOf(undefined));
console.log(superTypeOf(superTypeOf)); 
