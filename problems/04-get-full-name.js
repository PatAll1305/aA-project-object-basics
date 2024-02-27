/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
***********************************************************************/

function getFullName(person) {
  let arr = []
  for (key in person) {
    if (key === "firstName" || key === "lastName") {
      arr.push(person[key])
    }
  }
  return arr.join(' ')
}

let p1 = { firstName: 'John', lastName: 'Doe' };
getFullName(p1); // => 'John Doe'
let p2 = { firstName: 'Charlie', lastName: 'Brown', age: 9 };
getFullName(p2); // => 'Charlie Brown'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
