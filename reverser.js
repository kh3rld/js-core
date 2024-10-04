 const rev = [];
function reverse(arr) {
  if (typeof arr === "string" && !Array.isArray(arr)) {
    for (let i = arr.length - 1; i >= 0; i--) {
      rev.push(arr[i]);
    }
    return typeof arr === "string"
      ? rev.join("")
      : rev.join(",");
  } else if (Array.isArray(arr)) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }
}
