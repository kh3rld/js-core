function sums(n) {
  const result = [];

  function findPartitions(target, start, current) {
    if (target === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i <= target; i++) {
      current.push(i);
      findPartitions(target - i, i, current);
      current.pop();
    }
  }

  findPartitions(n, 1, []);
  return result;
}
