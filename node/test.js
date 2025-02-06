/*
Sudėtingesnis. Write a function that checks if a number is both greater than 10 and less than 100.
*/
function skaicius(num) {
    if (num > 10 && num < 100) {
        return true;
    } else if (num <= 10) {
        return false;
        }
      else if (num >= 100) {
            return false;
            }
}
console.log(skaicius(50)); 
console.log(skaicius(8));  
console.log(skaicius(150));