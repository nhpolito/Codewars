// i am trying to learn about a destructuring process here

// whole solution
// solution = function(str) {
//     return str.split .map(s=>[...s].map((e,i)=>i%2?e.toLowerCase():e.toUpperCase()).join`).join `;
//     // refactored code
// }

// breaking apart the solution in attempts to understand it -- I was thinking that by destructing the .map=(s=>[...s]) might 
// allow for the .map to be called again on the items but I still have not resolved this
function function2(str) {
    return str.split.map(s=>[...s].map(e => e).join("").join(""))
    // refactored code
}
console.log(function2("helloworld"))