let str = "dog"

let nstr = ''

for (let i = 0; i< str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        for(let k = j + 1; k < str.length; k++) {
            nstr += str[i] + str[j] + str[k] + ","
        }
        nstr += str[i] + str[j] + ","
    }
    nstr += str[i] + "," 
}


/*for (let num = str.length-1; num >= 0; num--) {
     
    for (let num1 = 0; num1 <= num; num1++){
        
        for(let num2 = 0; num2 <= num; num2++) {
            nstr += str[num2] 
        }
     }
}*/
console.log (nstr)