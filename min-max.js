/*
Instructions

Create a function named max that takes 2 number arguments and returns the largest of the two.

    You must not just use Math.max, make your own.

Create a function named min which is the same as max, but returns the lowest.

    You must not just use Math.min, make your own.

*/
function max(n, n2) {
    if (n > n2) {
        return n
    }
    return n2
}
function min(n, n2) {
    if (n < n2) {
        return n
    }
    return n2
}
console.log(max(3, 4))
console.log(min(1, 2))