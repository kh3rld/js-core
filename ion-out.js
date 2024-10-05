/*
Instructions

Create a function named ionOut, that receives a string and returns an array with every word containing 
'ion' following a 't'. The words should be returned without the 'ion' part. 
 */
function ionOut(str) {
  const regex = /\b(\w+t)ion\b/g;
  return (str.match(regex) || []).map((word) => word.slice(0, -3));
}
