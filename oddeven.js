const num = 10

const arr1 = [], arr2 = []

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        let str = ""
        str += i
        arr1.push(str)
    } else {
        let str = ""
        str += i
        arr2.push(str)
    }
}
console.log(arr1)
console.log(arr2)