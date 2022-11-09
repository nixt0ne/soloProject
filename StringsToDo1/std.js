//remove blanks

// function removeBlanks(str) {
//     var str1 = ""
//     for( i= 0; i < str.length; i++){
//         if(str[i]!= ' '){
//             str1 += str[i]
//         }
//     }
//     return str1

// }
// console.log(removeBlanks(" Te s t "))

//getDigits

// function gD(str){
//     var str1 = " "
//     for(var char in str){
//         if (!isNaN(str[char])){
//             str1 += str[char]
//         }

//     }
//     console.log(Number(str1))
//     return(str1)
// }
// gD("s12hl4j1h234klj34")


//Acro
// function acro(str){
//     var arr = str.split(" ")
//     // console.log(arr)
//     var acroStr= ""
//     for(var word in arr){
//         // console.log(arr[word][0])
//         if(arr[word].length > 0){
//             acroStr +=arr[word][0].toUpperCase()
//         }
        

//     }
//     return acroStr
// }

    

// console.log(acro("hello there world"))


//count

// function count(str){
// var counter = 0

// for(var char in str){
//     if(str[char] != " "){
//         counter++
//     }
// }
// return counter
// }


// console.log(count("Hello World"))


//remove

// function remove(arr,a){
//     var str1 = []
//     var ind = 0
//     for(var val in arr) {
//         if(arr[val].length >= a){
//             console.log(arr[val])
//             str1[ind++] = arr[val]
//         }
//     }
// }
// remove(["Hello", "World", "Hi"], 3)