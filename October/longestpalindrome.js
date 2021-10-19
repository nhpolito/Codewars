longestPalindrome = function(s){
    let split = s.split("")
    console.log(split)
    let newer = split.map((x,index,array) => {
        // use slice to find the items before the item we are currently looking at 
        // use join to get rid of the comma
        let addOn = array.slice(0,index).join("")
        console.log(`addOn = ${addOn}`)
        return addOn.concat(x)
    })
    // filter newer to only allow palindromes
    // sort the palindromes array by length
    palindromes = newer.filter(x => {
       return checker(x)
    }).sort((a,b) => {
        return a.length > b.length ? -1 : 1
    })

    // return the sorted plaindromes array at inded - 
    return palindromes[0]

    console.log(palindromes)

    // create a palindrome checker function
    function checker(test) {
        // reverse the string
        let reversed = test.split("").reverse().join("")
        // if the reversed and test are not equal then we return false
        // otherwise we reutrn true
        if (reversed !== test) {
            return false
        } else return true
    }
  }

console.log(longestPalindrome("baablkj12345432133d"))

let test = 'a'

test.concat()
