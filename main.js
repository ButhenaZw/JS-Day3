// /////////Task 1/////////
// let i=1;
// for (let i=1; i<=10;){
//     console.log(i);
//     i++;
// }
// /////////Task 2/////////
// while (i<=10){
//     console.log(i);
//     i++;
// }
// /////////Task 3/////////
// let num = [1,2,3,4,5];
// for (let i=0; i<num.length; i++){
//     console.log(num[i]);
// }
/////////Task 4/////////
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
/////////Task 5/////////
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);
///////Task 6/////////
// let sum1 = [1, 2, 3, 4, 5];
// console.log(sum1[sum1.length - 1]);
///////Task 7/////////
// let numbers = [5, 4, 3, 2, 1];
// let small = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < small) {
//         small = numbers[i];
//     }
// }

// console.log(small);


///////Task 8/////////
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// let average = sum / numbers.length;
// console.log(average);



////////Task 9/////////
// let number = 5;
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//     factorial *= i;
// }

// console.log(factorial); 


//////////Task 10/////////
// let limit = 20;

// for (let num = 2; num <= limit; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//         if (isPrime) {
//             console.log(num);
//         }
//     }
    /////////Task 11/////////
//     let number = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }
////////Task 12/////////
// let array = [1, 2, 3, 4, 5];
// let step = 2;

// for (let i = 0; i < array.length; i += step) {
//     console.log(array[i]);
// }
////////Task 13/////////
// let array = [1, 2, 3, 4, 5];

// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }
////////Task 14/////////
// let array = [1, 2, 3, 4, 5];
// let start = 2;
// let end = 4;

// for (let i = start; i <= end; i++) {
//     console.log(array[i]);
// }
////////Task 15/////////
// let array = [1, 2, 3, 4, 5];
// let target = 4;
// let found = false;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//         found = true;
//         break;
//     }
// }

// console.log(found);
////////Task 16/////////
// let array = [1, 2, 1, 3, 2, 1];
// let target = 1;
// let frequency = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//         frequency++;
//     }
// }

// console.log(frequency);
////////Task 17/////////
// let limit = 10;
// let a = 0, b = 1;

// console.log(a); // Output: 0
// console.log(b); // Output: 1

// for (let i = 2; i < limit; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// }
/////////////////////////////////
