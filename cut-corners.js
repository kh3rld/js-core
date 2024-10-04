function checkInt(num) {
    const sign = num >= 0 ? 1 : -1;
    num = Math.abs(num)

    let placeValue = 1
    let result = 0

    while (placeValue <= num) {
        placeValue *= 10
    }
    placeValue /= 10

    while (placeValue >= 1) {
        while (result + placeValue <= num) {
            result += placeValue
        }
        placeValue /= 10
    }
    return sign * result
}

function round(num) {
   let newInt = checkInt(num)
   let dec = Math.abs(num-newInt)
   if (dec < 0.5) {
    return newInt
   }
   return num >= 0 ? newInt+1 : newInt-1
}

function ceil(num) {
    let newInt = checkInt(num)
    if (num === newInt) {
        return num
    }
    return num> 0? newInt+1 : newInt
}

function floor(num) {
    let newInt = checkInt(num)
    if (num === newInt) {
        return num
    }
    return num  > 0 ? newInt : newInt-1
}

function trunc(num) {
    return checkInt(num)
}