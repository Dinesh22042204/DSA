let str = "dog"

let nstr = " "

for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        if (j === i) {
            nstr += str [j] + ','
        } else if (j === (i + 1)) {
            nstr += str [j-1] + str[j] + ','
        } else {
            nstr += str +','
        }
   }
}
console.log(nstr)






/*for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            nstr += str [i] + ','
        } else if (i === 1) {
            nstr += str [i-1] + str[i] + ','
        } else {
            nstr += str +','
        }
      }
   }
   else if (i === 1) {
      for (let i = 1; i<str.length; i++)  {
        if (i === 1) {
            nstr += str [i] + ','
        } else  {
            nstr += str [i-1] + str[i] + ','
        } 
      }
   }
   else {
    for (let i = 2; i<str.length; i++) {
        nstr += str[i]
    }
   }
}
console.log(nstr) */
