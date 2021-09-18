// My Solution

function disemvowel(str) {
    // pass all vowels lower and uppercase into an array
    let z = "aeiouAEIOU".split("")
    // split str into an array
    let string = str.split("")
    console.log(z)
    console.log(string)
    // call filter method on string to return all items that do not exist in the z (vowels) array, it then joins these items with the join method
    return string.filter( x => {
       return (z.indexOf(x) == -1)
    }).join("");
  }

console.log(disemvowel("This website is for losers LOL!"))

// Proper solution
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }