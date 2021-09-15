function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a','e','i','o','u']
    let split = str.split("").filter(x => {return vowels.indexOf(x) !== -1}).length
    console.log(split)
    // enter your majic here
    
    return split;
  }

console.log(getCount('aabbccddee'))