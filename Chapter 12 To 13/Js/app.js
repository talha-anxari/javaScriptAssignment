// Question 02
// var num1, num2;

// if (parseInt(num1, 10) > parseInt(num2, 10)) {
//   console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
// } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
//   console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
// } else {
//   console.log("The values " + num1 + " and " + num2 + " are equal.");
// }

// Question 03
// var num = +prompt(`Please Enter A Number`);

// if(num > 0){
//     alert(`The Number Is Positive`)
// }else if(num < 0){
//     alert(`The Number Is Negative`)
// }else{
//     alert(`Your Number 0 Please Enter A Number Positive Or Negative`)
// }

// Question 04
// var vowel = prompt(`Enter A Vowel Character`);
// if(vowel === 'a', 'e', 'i', 'o', 'u'){
//     alert(`true`)
// }else{
//     alert(`false Otherwise`)
// }

// Question 05
// var originalPassword = `pakistan`;

// var userPassword = prompt(`Please Enter Your Password`)

// if(userPassword === originalPassword){
//     alert(`Your Password is Correct!`)
// }else{
//     alert(`Your Password Is Wrong`)
// }

// Question 06
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// Question 07
var userInput = prompt(`Enter a Time in 24-hours`);

if(userInput >= '00' && userInput <= '04'){
    alert(`Good Night`)
}else if(userInput >= '05' && userInput <= '12'){
    alert(`Good Noon`)
}else if(userInput >= '13' && userInput <= '16'){
    alert(`Good Afternoon`)
}else if(userInput >= '17' && userInput <= '23'){
    alert(`Good Evening`)
}else{
    alert(`Please Enter A Time`)
};