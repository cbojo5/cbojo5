function sumCalculator(arr) {
    let sum= 0
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr [i]
    }
    return sum
}
let result = sumCalculator([3,6,9])

console.log(result)