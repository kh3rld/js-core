function sign(n) {
    if (n == 0) {
        return 0
    }
    return (n > 0) ? 1 : -1
}
console.log(sign(10))