/*
Instructions

Create 3 functions which accept an array to be searched, and a value to be matched.

    indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
    lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
    includes: which returns true if the value was found in the array, and false otherwise.

    Of course you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes().
 */
function indexOf(arr, val) {
    let idx = 0;
    if (idx < 0) {
        idx = arr.length + idx;
    }
    
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] === val) {
            return i; 
        }
    }
    return -1; 
}

function lastIndexOf(arr, val) {
    let idx = arr.length - 1
    if (idx >= arr.length) {
        idx = arr.length - 1;
    }
    
    for (let i = idx; i >= 0; i--) {
        if (arr[i] === val) {
            return i; 
        }
    }
    return -1; 
}

function includes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true; 
        }
    }
    return false; 
}

const array = ["Hello", "Kherld", "Nerd"];
console.log(indexOf(array, "Hello")); 
console.log(lastIndexOf(array, "Kherld")); 
console.log(includes(array, "Hey")); 
console.log(includes(array, "Nerd")); 
