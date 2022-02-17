// 4. Given an array. Write a recursive function that removes the first element and returns the
// given array. (without using arr.shift())

let arr = [6, 78, `n`, 0, 1];

function noShift(arr, i = 1, output = []) {

  if (i < arr.length) {
    output.push(arr[i]);
    i++;
    return noShift(arr, i, output);
  }
  return output;

}

console.log(noShift(arr));

// ------------------------------ DONE ------------------------------ \\