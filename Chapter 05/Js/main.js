var a = 3;
var b = 5;
var c = a + b;

console.log(c);

var a = 5;
var b = 3;
var c = a - b;

console.log(c);

var a = 5;
var b = 3;
var c = a * b;

console.log(c);

var a = 5;
var b = 3;
var c = a / b;

console.log(c);

var fullName;
console.log(fullName)

// Step 1: Declare a variable
// let myVariable;

// Step 2: Show the value after variable declaration
// console.log(`Value after variable declaration is: ${myVariable}`);

// Step 3: Initialize the variable with some number
// myVariable = 5;

// Step 4: Show the initial value
// console.log(`Initial value: ${myVariable}`);

// Step 5: Increment the variable
// myVariable++;

// Step 6: Show the value after increment
// console.log(`Value after increment is: ${myVariable}`);

// Step 7: Add 7 to the variable
// myVariable += 7;

// Step 8: Show the value after adding 7
// console.log(`Value after adding 7 is: ${myVariable}`);

var ticket = 600;
var five = 5;

console.log(`Total coast of buy ticket to a movie is:`, five*ticket,`PKR`);

console.log(`4 x 1 =`, 4*1);
console.log(`4 x 2 =`, 4*2);
console.log(`4 x 3 =`, 4*3);
console.log(`4 x 4 =`, 4*4);
console.log(`4 x 5 =`, 4*5);
console.log(`4 x 6 =`, 4*6);
console.log(`4 x 7 =`, 4*7);
console.log(`4 x 8 =`, 4*8);
console.log(`4 x 9 =`, 4*9);
console.log(`4 x 10 =`, 4*10);

console.log(`Shopping Cart`);

var item1 = 650;
var quantity1 = 3;

var item2 = 100;
var quantity2 = 7;

console.log(`Total Cost Of Your Order is:`, item1*quantity1+ item2*quantity2);

console.log(`Marks Sheet`);

var totalMarks = 980;
var obtainMarks = 804;

var percentage = obtainMarks * 100 / totalMarks;

console.log(percentage);

// var maths = 80
// var english = 70
// var urdu = 80
// var pst = 70

// var totalMarksSecure = maths + english + urdu + pst
// var totalMarks = 400

// var percentage = totalMarksSecure * 100 / totalMarks
// alert(percentage + '%')

// var bottleCost = 180
// var totalBottle = 5
// var pizzaCost = 1500
// var totalPizza = 5
// var discount = 10
// var tax = 13

// var totalCost = (bottleCost * totalBottle) + (pizzaCost * totalPizza)
// alert('totalCost ' +  totalCost)
// var taxPrice = totalCost * 13 / 100
// alert('taxPrice ' +  taxPrice)
// var priceAfterTax = totalCost + taxPrice
// alert('priceAfterTax  ' +  priceAfterTax)
// var discount = priceAfterTax * 10 / 100
// alert('discount  ' +  discount)
// var netCost = priceAfterTax - discount
// alert('netCost  ' +  netCost)

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var users_value = prompt('enter any number')
var users_second_value = prompt('enter 2 number')
var users_operation_value = prompt('enter operation + - * / %')
// console.log(users_operation_value , users_second_value ,users_value)

if (users_operation_value === "+") {
    console.log(Number(users_value) + Number(users_second_value))  
}else if(users_operation_value === "-"){
    console.log(users_value - users_second_value)
}
else if(users_operation_value === "*"){
    console.log(users_value * users_second_value)
}
else if(users_operation_value === "/"){
    console.log(users_value / users_second_value)
}
else if(users_operation_value === "%"){
    console.log(users_value % users_second_value)
}else{
    console.log("Invalid operator")
}
