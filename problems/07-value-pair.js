/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let arr = []
  if (obj1[key] !== undefined && obj2[key] !== undefined) {
    arr.push(obj1[key], obj2[key])
    return arr
  }
  return "There are no pairs in these objects."
}

let object1 = { name: 'One', location: 'NY', age: 3 };
let object2 = { name: 'Two', location: 'SF' };
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
