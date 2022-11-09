// var myNum=4
// var mynub=6
// const total =myNum + mynub
// console.log(total)


// var x = 75;
// if (x > 100) {    
//     console.log("bigger than 100");
// }
// else if (x > 50) {    
//     console.log("bigger than 50");
// }
// else if(x > 25) {
//     console.log("bigger than 25");
// }
// else {    
//     console.log("small number");
// }


// var num1 = 20;
// var num2 = 5;
// if (num1 < num2) {
//     num2 = num2 * num1;
// } else {
//     num1 = num1 / num2;
//     if (num1 < num2){
//         num1 = num1 * 2;
//     } else if (num1 == num2){
//         num2 = num1 * num2;
//     } else {
//         num2 = num2 * 2;
//     }
// }
// console.log(num1);
// console.log(num2);

// var arr = [2,4,6,8,10];
// for (var i = 0; i < arr.length; i = i + 1) {        
//     console.log(i);             // prints the index       
//     console.log(arr[i]);        // prints the array value at that index
// }

// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";
    
// if(isSunny) {
//   whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//   whatToBring += "a coat, ";
// }
// if(isRaining) {
//   whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";
    
// console.log(whatToBring);

// function tip(bill) {
//     console.log(bill * 1.20);
//     return bill * 1.20;
// }
// var thaiFood = 150;
// // a function call is equal to whatever that function returns
// var total = tip(thaiFood); // need a variable to capture the return value

// var divide = total * 3;
// console.log(divide)

// for(var j = 0; j < 5; j++){
//     var str = "";
//     for(var i = 0; i < 5; i++){
//         str += "$";
//     }
//     console.log(str);
// }

// var arr2d = [ [2, 5, 8],
//               [3, 6, 1],
//               [5, 7, 7] ];
    
// // We can console.log the `8` in this array if we console.log(arr2d[0][2]);
// // the first index `0` will select the `[2, 5, 8]` sub-array
// // // the second index `2` will select the `8` out of that sub-array
// // console.log(arr2d[0][2]);  
    
// // We can loop through these nested arrays with nested for loops!
// for(var i=0; i < arr2d.length; i++) {
//     for(var j=0; j < arr2d[i].length; j++) {
// 	console.log(arr2d[i][j]);
//     }
// }


function double(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]*=2
    }
    return arr
}
let arr=[1,2,3,4,5]
double(arr)
console.log(arr) //What gets console logged here?