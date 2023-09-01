const arr = [1,3,4,2,5,7,8,9,6,10]

let sort = arr.sort(function (a,b) {
    return a - b
})

console.log(sort[1],sort[sort.length-2])