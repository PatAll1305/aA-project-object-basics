/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

***********************************************************************/

function arrayConverter(array) {
  let obj = {};
  array.sort()
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    if (array[i] === array[i + 1]) {
      count++
      obj[array[i]] = count
      array.splice(array[i + 1], 1)
    } else if (array[i] !== array[i + 1]) obj[array[i]] = 1

  }
  return obj
}

// console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
// console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
// console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
