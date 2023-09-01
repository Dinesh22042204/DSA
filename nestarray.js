const arrs = ["Dinesh", "tedrwbcbfd", [[2,3,4,5,6],["ABC","432", 7]] ]

let val = arrs.flat(2) 

let arr1 = 0,arr2=""
let str = val.filter(function(arr){
    if(Number(arr) == arr){
       let num = Number(arr)
        arr1+=num
} else {
    if(typeof(arr) === "string") {
        arr2+=arr
    }
    } 
}) 

console.log(arr1)
console.log(arr2)

// let str = val.filter(function(arr){
//     return typeof(arr) === "string"
// }) */


/*let arr1 = 0
let str = val.filter(function(arr){
    if (typeof(arr)==="number") {
        arr1+=arr
    }
    return typeof(arr) === "string"
}) */



// Expected Response {"DineshABC", 452}


// map, filter
// recursion function 

/*for (let i = 0 ; i < arr.length; i++) {
    if(typeof(arr[i]) === "string"){
        arr1 = arr[i]
        continue
    }
    for(let j = 0; j < arr.length; j++) {
        for(let k = 0; k < arr[j].length; k++) {
        if(typeof(arr[i][j][k]) === "string") {
             arr1 += arr[i][j][k]
        } else if (arr[i][j][k] === undefined) {
            arr2 += ""
        }
        else {
            arr2 += arr[i][j][k]
        }
    }
    }
    console.log(arr1)
    console.log(arr2)
}*/


    
