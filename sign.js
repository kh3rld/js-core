function sign(n) {
    if (n == 0) {
        return 0
    }
    return (n > 0) ? 1 : -1
}
function sameSign(n,n2) {
    if (sign(n2) == sign(n)) {
        return true
    } 
    return false
}
console.log(sign(10))