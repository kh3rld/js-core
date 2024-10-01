let str = "Hello Kherld!"
let arr = ["Hello", "Kherld"]
function words(str) {
    return str.split(' ')
}
function sentence(arr) {
    s = arr.join(' ')
    return s
}
function yell(str) {
    return str.toUpperCase()
}
function whisper(str) {
    return `*${str.toLowerCase()}*`
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
console.log(words(str))
console.log(sentence(arr))
console.log(yell(str))
console.log(whisper(str))
console.log(capitalize(str))