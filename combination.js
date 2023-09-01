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