function duplicateEncode(word) {
  let split = word.toLowerCase().split("");

  let counter = split.reduce((pv, nv) => {
    if (!pv[nv]) {
      pv[nv] = 0;
    }
    pv[nv]++;
    return pv;
  }, {});

let final = split.map(x => {
    if (counter[x] > 1) {
        return ")"
    } else return "("
}).join("")

return final

  console.log(split)
  console.log(counter);

  // ...
}

console.log(duplicateEncode("recede"));
/*
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
