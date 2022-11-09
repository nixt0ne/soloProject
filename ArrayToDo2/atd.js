//Reverse


// let arr = [1,2,3,4];
// let arr1 = [4,2,3,5,3,3,2,6,5,-7]
// let arr2 = [1]
// let arr3 = []

// function reverseArr(a) {
//     for(var i=0; i < a.length - i; i++){
//         var temp = a[i]
//         a[i] = a[a.length-1-i]
//         a[a.length-1-i] = temp

//     }

// }

// reverseArr(arr);
// console.log(arr)
// reverseArr(arr1);
// console.log(arr1)
// reverseArr(arr2);
// console.log(arr2)
// reverseArr(arr3);
// console.log(arr3)

//rotate

// function rotateArr(b,c) {
//     for (var i=0; i<c; i++) {
//         var temp = b[b.length - 1]
//         for(var d = b.length - 2; d >=0; d--){
//             b[d+1] = b[d];
//         }
//         b[0] = temp
//     }
// }

// let arr = [1,2,3]
// console.log(arr.length)
// rotateArr(arr,2)
// console.log(arr)

//Reverse

// function rotateArr(b,c) {
//     for (var i=0; i< Math.abs(c) % arr.length; i++) {
//         var temp = arr[0]
//         for(var d = 1; d <b.length; d++){
//             b[d-1] = b[d];
//         }
//         b[b.length-1] = temp
//     }
// }

// let arr = [1,2,3]
// console.log(arr.length)
// rotateArr(arr,-1001)
// console.log(arr)

//refined

// function rotateArr(array,c){
//     revArr(array)
//     var move
//     if (c>0){
//         move = c % array.length
//     }else{
//         move = Math.abs(c)% array.length
//     } if (c>0){
//         revArr(array,0,move - 1)
//         revArr(array, move,array.legth- 1)
//     } else 
//     revArr(array,0,array.length -move -1)
//     revArr(array,array.length - move,array.length -1)
// }

// function revArr(array, startInd = 0, endInd= array.length - 1){
//     let numInd = 0
//     for(k= startInd; k<(startInd + endInd)/2; k++){
//         let temp = array[k]
//         array[k] = array[endInd - numInd]
//         array[endInd - numInd] = temp
//         numInd++
//     }
    
// }
// var x = [1,2,3,4,5,6,7,8]
// rotateArr(x,2,3)
// console.log(x)


// range
// function range(arr,min,max){
//     for (var i = 0; i< arr.length; i++){
//         if (arr[i]< min || arr[i] > max){
//             for (var a = i+1; a< arr.length; a++){
//                 arr[a-1] =arr[a]

//             }
//             arr.length--
//             i--
//         }
//     }
// }

// var ar= [1,2,3,4,5,6,7,8]
// range(ar,2,5)
// console.log(range)
// console.log(ar)
// var nick= 1
// console.log(nick)

//concat
function concat(arr1,arr2){
    var arr3= []
    var ind = 0
    for (var i=0; i< arr1.length; i++){
        arr3[ind] = arr1[i]
        ind++
    }
    for (var i=0; i< arr2.length; i++){
        arr3[ind] = arr2[i]
        ind++
    }
    return arr3
}

var inf = concat([2],[2,5])
console.log(inf)