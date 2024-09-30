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