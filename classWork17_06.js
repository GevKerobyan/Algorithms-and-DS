/* 
  6. Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift())
*/

/*
[`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`] 3      - [‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
[`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`] -2     - [‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
*/

let arr = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];

let n = 0;

function rotate (arr, n) {

  if (n > 0) {
    arr.push(arr[0]);
    arr.shift();
    n--;
    return rotate(arr, n)
  }
  
  if (n < 0) {
    arr.unshift(arr[arr.length-1]);
    arr.pop();
    n++;
    rotate(arr, n);
  }

return arr;
}
console.log(rotate(arr, n));

// in case of n=0, none of the if statements work, hence nothing changes in the array.

// ------------------------------ DONE ------------------------------ \\