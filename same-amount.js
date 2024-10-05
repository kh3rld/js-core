function sameAmount(str, reg1, reg2) {
  let count1 = 0;
  while (reg1.exec(str) !== null) {
    count1++;
  }
  let count2 = 0;
  while (reg2.exec(str) !== null) {
    count2++;
  }
  return count1 === count2;
}

const str = "hello world, hello universe!";
const regexA = /hello/g;
const regexB = /o/g;

console.log(sameAmount(str, regexA, regexB));

const regexC = /world/g;
console.log(sameAmount(str, regexA, regexC));
