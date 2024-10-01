/**
 Instructions

Create 2 functions:

    get: a function that takes a key and returns the corresponding value from the sourceObject.

    set: a function that takes a key and a value. Update the value for the corresponding property of the sourceObject and return the value.

    Code provided
    The provided code will be added to your solution, and does not need to be submitted.
    const sourceObject = {
        num: 42,
        bool: true,
        str: 'some text',
        log: console.log,
    }

 */
function get(keys) {
    return sourceObject[keys]
}

function set(key, value) {
    sourceObject[key] = value
    return value
}