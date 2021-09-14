// ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

// 🗺️ You would be given a map of the world in a type of string:

// string s = "01000000X000X011X0X"

// '0' : uninfected

// '1' : infected

// 'X' : ocean

// start: map1 = "01000000X000X011X0X"
// end:   map1 = "11111111X000X111X0X"
// total = 15
// infected = 11
// percentage = 100*11/15 = 73.33333333333333

function infected(s) {
let zeros = 0
let ones = 0
    let splitbyx = s.split("X")
    let affectedpersons = splitbyx.map(
    x => {
        string = ""
        for (let i of x){
        console.log(x)
        console.log(`truefalse = ${x.indexOf(1)}`)
        if (x.indexOf(1) == 1) {return [x.length,1]} 
            if (x.indexOf(1) == -1) {return [x.length,0]}
        }
    }
    )
// accessing the second array
    let z = affectedpersons.filter(x => {return (typeof(x) == 'object')})
    console.log(z)
    for (let i = 0; i< z.length; i++) { 
        if (z[i][1] === 0) {zeros = zeros + z[i][0]} 
        else 
        if (z[i][1] === 1) {ones = ones + z[i][0]}
        console.log(zeros) 
        console.log(ones)
    
    }
// math at the end of the problem
    let numerator = ones
    let denominator = zeros + ones
    let final = (numerator/denominator) *100
    return final
  }

console.log(infected('01000000X000X011X0X'))

// The proper code is below

function infected(s) {

    if(!(s.includes('0') && s.includes('1'))) return 0;
    
    let str = s.split('X').map(el => el.includes('1') ? el.replace(/0/g, '1') : el).join('');
    
    let total = str.length;
    let infect = str.match(/1/g).length;
    
    return 100 * infect / total;
  }