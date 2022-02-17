// 3. Given an array of numbers which is almost sorted in ascending order. Find the index
// where sorting order is violated.

[2, 12, 15, 48, 64]       - -1
[-9, -4, -4, 3, 12, 4, 5] -  5

let arr = [-9, -4, -4, 3, 12, 4, 6];
let numArr = arr;


function orderBreak(arr, index=1) {
  if (!(arr[0] <= arr[1])) {
    return index;
  } 
  arr.shift();

  if (arr.length > 1) {
    index++;
    return orderBreak(arr, index);
  }
  else return -1;
}
console.log(orderBreak(numArr));

// ---------------------------- DONE --------------------------- \\