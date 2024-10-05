function sameAmount(str, reg1, reg2) {
  let count1 = 0;
  let count2 = 0;

  let match1;
  while ((match1 = reg1.exec(str)) !== null) {
    count1++;
  }

  let match2;
  while ((match2 = reg2.exec(str)) !== null) {
    count2++;
  }

  return count1 === count2;
}
