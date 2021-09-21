var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        console.log(`currentSum = ${currentSum}`)
        // currentsum = max between the current sum plus the next number, and 0
        currentSum = Math.max(currentSum+number, 0);
        // return currentSum as maxSum if the current sum is bigger than any previous currentSum
        console.log(`maxSum = ${maxSum}`)
        return Math.max(currentSum, maxSum);
        
    }, 0);
}

test = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

console.log(test)