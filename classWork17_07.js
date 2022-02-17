/*
7. Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result.
*/

/*
    Input           Output
      
      14              5
      29              2
  999999999999        9
  */

  let num = 999999999999;

  function sumFunc(num, count = 0) {
    let lastDigit = num%10;
    count = count + num%10;
    num = (num - lastDigit)/10;
  
    if (num > 9) {
      sumFunc (num, count)
    } else {
      count += num;
    }
    if (count > 9) {
      return sumFunc(count,);
    } else return count;
  }
  
  console.log(sumFunc(num));
  
  // ------------------------------ DONE ------------------------------ \\