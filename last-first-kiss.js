let arr = ["hello", "World", "I", "am", "Here"]
function first(arr) {
    return arr[0]
}
console.log(first(arr))
function last(arr) {
    return arr[arr.length - 1]
}
console.log(last(arr))
function kiss(arr) {
    return [arr[arr.length - 1], arr[0]];
}
console.log(kiss(arr))