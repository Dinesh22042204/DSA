//Write a JavaScript function that reverse a number?

const num = 32243

let str = num.toString()

let nstr = " "

for(let i = str.length-1 ; i>=0; i--) {
    nstr += str[i]
 }
console.log(nstr)
