let sumCalculator= (arr)=> {
    let sum=0
   for (let i=0; i<arr.length; i++) { 
        sum = sum + arr [i]
    }
    return sum
}

        

console.log(sumCalculator([3,6,9]));