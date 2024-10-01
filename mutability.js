/*
Instructions

Create three copies of the person object named clone1, clone2 and samePerson.

Increase the age of person by one, and set its country to 'FR'.

You must find a way to keep the original values of clone1 and clone2. The values of samePerson should change when person is changed.
    Code provided
    The provided code will be added to your solution, and does not need to be submitted.
    const person = {
        name: 'Rick',
        age: 77,
        country: 'US',
    }
*/

// Using the JSON.stringify() and JSON.parse() methods
let clone1 = JSON.parse(JSON.stringify(person));
Object.freeze(clone1);
// Using the spread (...) syntax
let clone2 = { ...person };
Object.freeze(clone2);
person.age = 78
person.country = "FR"
// Using the Object.assign() method
let samePerson = person