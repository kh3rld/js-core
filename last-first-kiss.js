function first(arr = ["hey", "Hello"]) {
    return arr[0]
}
console.log(first())
function last(arr = ["Hello", "Kherld"]) {
    return arr[arr.length-1]
}
console.log(last())
const kis = []
function kiss(arr = ["hello", "World", "I", "am", "Here"]) {
    return kis.push(arr[0], arr[arr.length-1]);
}
kiss()
console.log(kis)