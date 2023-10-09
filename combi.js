let str = "dinesh"

let nstr = []

for (let i = 0; i< str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
       nstr.push(str.slice(i,j))
    }
}

console.log(...nstr)