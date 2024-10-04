/*
Instructions

Create a function named get which takes two arguments:

    src: an object.
    path: a string representing a path.

Your function will return the value at the given path in the src object.
 */
function get(src, path) {
  const keys = path.split(".");
  let result = src;
  for (let key of keys) {
    result = result[key];
    if (result === undefined) {
      return undefined;
    }
  }
  return result;
}

const data = {
    user: {
        name: "Kherld",
        address: {
            city: "Doraland",
            home: "Manson"
        }
    }
};

console.log(get(data, "user.name")); 