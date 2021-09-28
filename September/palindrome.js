function check(str) {
    str = str.toLowerCase()
let base = str
let compare = str.split("").reverse().join("")
console.log(compare)

if (base == compare) {
    return 'yay'
} else return 'nay'
}

console.log(check('Cac'))