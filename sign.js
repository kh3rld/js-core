/* 
Create a function named sign that takes one number argument; returning 1 if the number is positive, -1 if the number is negative and 0 if the number is exactly 0.

You must not just use Math.sign, make your own.

Create a function named sameSign that takes 2 numbers as arguments and returns true if they both have the same sign, or false otherwise.
*/

function sign(n) {
    if (n == 0) {
        return 0
    }
    return (n > 0) ? 1 : -1
}
function sameSign(n, n2) {
    if (sign(n2) == sign(n)) {
        return true
    }
    return false
}
console.log(sign(10))