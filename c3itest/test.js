// c3i test

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;

for(num = 999; num > 0; num--) {
  if(num % 5 == 0 || num % 3 == 0){
    // console.log(num);
    sum += num;
  }
}

console.log(sum);
