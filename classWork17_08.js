// MERGE AND SORT IMPLEMENTATION //

// let arr1 = [1, 4, 2, 5, 12, 65, 83, 25, 9, 54];
// let arr2 = [3, 5, 7, 34, 6, 57, 86, 242, 14];
// let arr3 = [1, 34, 5, 6, 2];

let arr1 = [`asd`, `lkj`, `fad`];
let arr2 = [`kjh`, `asdflkjh`, `osdf`];
let arr3 = [`asdlfkhj`, `ijkbnm`, `kjhg`, `adsfg`, `erdfc`, `123`];

function mergeSortImplement(arr, ...arg) {

  function initialMergeArrays(arr, ...arg) {    /* recieves n amount of input arrays and returns a single array */
    return arr.concat(...arg);

  } /* initialMergeArrays */

  function nestedArr(arr) {                     /* opens all nested arrays and returns a single array without nested ones */
    return arr.reduce((acc, el) => {
      if (Array.isArray(el)) {
        return acc.concat(nestedArr(el));
      } else {
        return acc.concat(el)
      }
    }, [])

  } /* nestedArr */

  function divide(arr) {                      /* divides the array into small parts for further sorting */
    if (arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return sortAndMerge(divide(left), divide(right));

  }; /* divide */

  function sortAndMerge(left, right) {                   /* sorts the divided array parts and merges them together */
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    if (left.length === 0) return result.concat(right);
    if (right.length === 0) return result.concat(left);

  }; /* sortAndMerge */

  return divide(nestedArr(initialMergeArrays(arr, ...arg)));

} /* mergeSortImplemet */

console.log(mergeSortImplement(arr1, arr2, arr3));

// ------------------------------ DONE ------------------------------ \\