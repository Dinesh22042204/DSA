const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let len = str.length-1


let str1 = ""

for (let i = 0; i <= 7; i++) {
    
    let ran = Math.floor(Math.random() * (len - 0 + 1)) + 0

    str1 += str[ran]
}

console.log(str1)