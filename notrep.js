const str = 'accwknee'
const arrs = str.split('')

let rep = arrs.filter(function(arr,index){
    return (arrs.indexOf(arr) !== index)
})
console.log(rep)
let rep1 = arrs.filter(function(arr,index){
    return (arrs.indexOf(arr) === index)
})
console.log(rep1)

let len = rep.length , notrep = []

if(len === rep1.length){
   
    console.log("All elements are repeated")

}else {
    
    for(let len1 =  rep1.length-1; len1 >= len; len1--) {
        
        notrep.push(rep1[len1]) 
    
    }
console.log(notrep)
}
