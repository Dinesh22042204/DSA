const arrs = ["Dinesh", "tedrwbcbfd", [[2,3,4,5,6],["ABC","432", 7]] ]

let val = arrs.flat(2) 

let arr1 = 0,arr2=""
let str = val.filter(function(arr){
    if(Number(arr) == arr){
       let num = Number(arr)
        arr1+=num
} else {
    arr2+=arr
    }
    
}) 

console.log(arr1)
console.log(arr2)