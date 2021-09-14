// Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

// Example: m = 2 n = 4

// result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]


function generatePairs(m, n) {
let result = []
for (let i = m; i <= n; i++) {
    // console.log(i)
    // result.push(i)
    for (let ii = i; ii <= n; ii++) {
    // console.log(`ii = ${ii}`)
    result.push([i,ii])
    }
}
// console.log(a)
// console.log(b)
// console.log(result)
return result
}


let final = console.log(generatePairs(2,4)) 