// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  if (n < 10) {return n} 
  else
  console.log(n)
//   recursively calling digital root passing in the reduced version of n as the new n
  return digital_root(n.toString().split("").reduce((pv, cv) => {return pv + +cv}, 0));
    
}

console.log(digital_root(493193));