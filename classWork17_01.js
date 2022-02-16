// 1. Write a recursive function to determine whether all digits of the number are odd or not.

let num = 411133;

function allOdd(num) {

   let lastDigit = num % 10;
   if (num < 10) {
      return (num % 2 !== 0);
   }
   if (lastDigit % 2 == 0) {
      return false
   }

   num = (num - lastDigit) / 10;
   
   return allOdd(num);

}

console.log(allOdd(num));

// ------------------------------ DONE ------------------------------ \\
