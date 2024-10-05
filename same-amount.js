function sameAmount(str, reg1, reg2) {
  const r1 = new RegExp(reg1, "g");
  const r2 = new RegExp(reg2, "g");
  const count1 = (str.match(r1) || []).length;
  const count2 = (str.match(r2) || []).length;
  return count1 === count2;
}
