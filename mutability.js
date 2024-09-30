let clone1 = JSON.parse(JSON.stringify(person));
Object.freeze(clone1);
let clone2 = { ...person };
Object.freeze(clone2);
person.age = 78
person.country = "FR"
let samePerson = Object.assign({}, person);