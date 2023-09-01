/*function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
//   Operator '<' cannot be applied to types '() => number' and 'number'.
  }

  const data = flipCoin()
  console.log(data) */

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  console.log("hii")
} else if (value === "a") {
  console.log("bye")
}

