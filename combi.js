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

console.log (nstr)