const str = 'accwknerrreree'
const arrs = str.split('')

let reps = arrs.filter(function(arr,index){
    return (arrs.indexOf(arr) !== index)
})

let rep = reps.filter(function(rep,index){
    return (reps.indexOf(rep) === index)
})

console.log(rep)
