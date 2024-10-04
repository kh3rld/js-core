function round(num) {
  return num < 0 ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
}

function ceil(num) {
  return num < 0 ? -Math.floor(-num) : Math.floor(num) + (num % 1 > 0 ? 1 : 0);
}

function floor(num) {
  return num < 0 ? -Math.ceil(-num) : Math.floor(num);
}

function trunc(num) {
  return num < 0 ? Math.ceil(num) : Math.floor(num);
}

const nums = [3.7, -3.7, 3.1, -3.1];

console.log(nums.map(round));
console.log(nums.map(floor));
console.log(nums.map(trunc));
console.log(nums.map(ceil));
