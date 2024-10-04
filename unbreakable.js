function split(str, sep) {
  let result = [];
  let idx = 0;
  if (sep === "") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }
  while (idx < str.length) {
    const nextIdx = str.indexOf(sep, idx);
    if (nextIdx === -1) {
      result.push(str.slice(idx));
      break;
    }
    result.push(str.slice(idx, nextIdx));
    idx = nextIdx + sep.length;
  }

  return result;
}

function join(arr, sep) {
  return arr.join(sep);
}