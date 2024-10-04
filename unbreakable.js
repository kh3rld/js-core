function split(str, sep) {
  let result = [];
  let idx = "";

  if (sep === "") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }
  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || str[i] === sep[0]) {
      let match = true;
      for (let j = 0; j < sep.length; j++) {
        if (str[i + j] !== sep[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        result.push(str.slice(idx, i));
        idx = i + sep.length;
        i += sep.length - 1;
      }
    }
  }
  result.push(str.slice(idx));
  return result;
}

function join(arr, sep) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];

    if (i < arr.length - 1) {
      result += sep;
    }
  }
  return result;
}
