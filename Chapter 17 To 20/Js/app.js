// //TODO: Question 01
// var empty = [];
// var num = [10];
// var boolean = [false];
// var str = [`Hello`];

// //TODO: Question 02
// var multiple = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// document.write(multiple);


// //TODO: Question 03
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

// //TODO: Question 04
// var table = [parseInt(prompt(`If You Want Print A Table So Type Here`))];

// for(var i = 1; i <= 10; i++){
//     console.log(`${table}  X  ${i}  =  ${table * i}`);
//     console.log(i)
// }

// //TODO: Question 05

// var fruitsName = [`Apple`, `Mango`, `Pear`, `Banana`, `Guava`, `Papaya`];

// for(var i = 0; i < fruitsName.length; i++){
//     console.log(i,fruitsName[i]);
// }

// //TODO: Question 06

// // a. Counting Series
// var countingSeries = [];
// for(var i = 1; i < 16; i++){
//     countingSeries.push(i);
// }

// // b. Reverse Counting
// var reverseCount = [];
// for(var i = 10; i >= 1; i--){
//     reverseCount.push(i);
// }


// // c. Even: 0, 2, 4, 6, 8, ... , 20
// let evenSeries = [];
// for (let i = 0; i <= 20; i += 2) {
//   evenSeries.push(i);
// }


// // d. Odd: 1, 3, 5, 7, 9, ... , 18
// let oddSeries = [];
// for (let i = 1; i <= 19; i += 2) {
//   oddSeries.push(i);
// }

// console.log(countingSeries);
// console.log(`Counting Series`);
// console.log(reverseCount);
// console.log(`Reverse Counting`)
// console.log(evenSeries);
// console.log(`Even Number`);
// console.log(oddSeries);
// console.log(`Odd Number`);

// //TODO: Question 07

// var foodEnable = prompt(`You Can Search Food`)
// var foods = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var flag = `No`

// for(var i = 0; i < foods.length; i++){
//     if(foodEnable === foods[i]){
//         flag = 'Yes';
//         console.log(foods[i]);
//     }
// }

// if(flag === `No`){
//     console.log(`Sorry, We Don't Have This Food`);
// }


// var foodEnable = prompt(`You Can Search Food`)
// var foods = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var flag = `No`

// for(var i = 0; i < foods.length; i++){
//     if(foodEnable === foods[i]){
//         flag = 'Yes';
//         console.log(`${foods[i]} Enable`)       
//     }
// }
// if(flag === `No`){
//     console.log(`Sorry, We Don't Have This Food`);
// }

// //TODO: Question 08


// var checkLargeNum = parseInt(prompt(`You Can Check Large Number`));
// var largeNum = [24, 53, 78, 91, 12];

// if(largeNum = 91){
//     console.log(`The Largest Number is ${largeNum}`);
// }else{
//     console.log(`Sorry, We Don't Have This Number`);
// }

// //TODO: Question 09


// var checkSmallNum = parseInt(prompt(`You Can Check Small Number`));
// var smallNum = [24, 53, 78, 91, 12];

// if(smallNum = 12){
//     console.log(`The Smallest Number is ${smallNum}`);
// }else{
//     console.log(`Sorry, We Don't Have This Number`);
// }

// //TODO: Question 10

for(var i = 5; i < 101; i += 5){
    console.log(i);
}
