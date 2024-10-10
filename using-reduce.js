// Adder
const adder = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

// Sum or Multiply
const sumOrMul = (arr, initialValue) => {
  return arr.reduce((acc, num) => {
    return num % 2 === 0 ? acc * num : acc + num;
  }, initialValue);
};

// Func Exec
const funcExec = (arr, initialValue) => {
  return arr.reduce((acc, func) => func(acc), initialValue);
};

console.log(adder([1, 2, 3, 4]));

console.log(sumOrMul([1, 2, 3, 5, 8], 5));

const functions = [(x) => x + 2, (x) => x * 3, (x) => x - 1];

console.log(funcExec(functions, 5));
