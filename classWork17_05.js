/* 
  5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
     function that concats arrays).

         INPUT                         OUTPUT

[1, [3, 4, [1, 2]], 10]     -     [1, 3, 4, 1, 2, 10]

[14, [1, [[[3, []]], 1], 0] -     [14, 1, 3, 1, 0]
*/

let arr = [1, [3, 4, [1, 2]], 10];

function nestedArr(arr) {

  return arr.reduce((acc, el) => {

    if (Array.isArray(el)) {
      return acc.concat(nestedArr(el));
    } else {
      return acc.concat(el)
    }
  },[])

}

console.log(nestedArr(arr))

// ------------------------------ DONE ------------------------------ \\