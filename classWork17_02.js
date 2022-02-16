// 2. Given an array of numbers. Write a recursive function to find its minimal positive
// element. (if such element does not exist, return -1).

let numArr = [56, -9, 87, -23, 0, -105, 55, 1];
let numArrTwo = numArr;

function minPlus(arr, count) {
  
  if (arr[0] >= 0 && arr[0] < count) {
    count = arr[0];
  }

  arr.shift();

  if(arr.length < 1) {
    return count; 
  } else {
    minPlus(arr, count);
  }
}

console.log(minPlus(numArrTwo, Infinity));