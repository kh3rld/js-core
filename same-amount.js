function sameAmount(str, reg1, reg2) {
  const countMatches = (regex) => {
    let count = 0;
    let match;
    regex.lastIndex = 0;
    while ((match = regex.exec(str)) !== null) {
      count++;
    }
    return count;
  };

  const count1 = countMatches(reg1);
  const count2 = countMatches(reg2);

  return count1 === count2;
}
