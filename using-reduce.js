// Adder
function adder(arr, additional = 0) {
  const initialVal = additional;
  const sum = arr.reduce((acc, current) => acc + current, initialVal);
  return sum;
}

// Sum or Multiply
function sumOrMul(arr, additional = 0) {
  const initialVal = additional !== 0 ? additional : arr[0] % 2 === 0 ? 1 : 0;
  const sumOrMult = arr.reduce((acc, current) => {
    return current % 2 === 0 ? acc * current : acc + current;
  }, initialVal);
  return sumOrMult;
}

// Func Exec
const funcExec = (arr, initialValue) => {
  return arr.reduce((acc, func) => func(acc), initialValue);
};

console.log(adder([1, 2, 3, 4]));

console.log(sumOrMul([1, 2, 3, 5, 8], 5));

const functions = [(x) => x + 2, (x) => x * 3, (x) => x - 1];

console.log(funcExec(functions, 5));
