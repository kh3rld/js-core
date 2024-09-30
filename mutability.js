let clone1 = JSON.parse(JSON.stringify(person))
const clone2 = {...person}
const samePerson = Object.assign({}, person)
person.age = 78
person.country = "FR"
