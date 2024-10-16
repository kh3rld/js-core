//reduce function for objects
function reduceValues(obj, func, val) {
  let entries = Object.entries(obj);
  let res;
  let startIndex = 0;

  //if initail val is provses, set it as  the starting accumulator
  if (val !== undefined) {
    res = val;
  } else {
    res = entries[0][1];
    startIndex = 1;
  }
  for (let i = startIndex; i < entries.length; i++) {
    const [key, value] = entries[i];
    res = func(res, value, key, obj);
  }
  return res;
}

//filter: that works like the [].filter method.
function filterValues(obj, func) {
  let res = {};
  for (let key in obj) {
    if (func(obj[key], key, obj)) {
      res[key] = obj[key];
    }
  }
  return res;
}

//map function for  objects
function mapValues(obj, func) {
  let res = {};
  for (let key in obj) {
    res[key] = func(obj[key], key, obj);
  }
  return res;
}
