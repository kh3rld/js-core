let clone1 = JSON.parse(JSON.stringify(person));
let clone2 = {...person};
let samePerson = Object.assign({}, person);
person.age = 78
person.country = "FR"
