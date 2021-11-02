// function freqSeq(str, sep) {
//     let split = str.split("").map((value,index,array) => array.filter(arrayItem => value === arrayItem).length).join(sep)

//     console.log(split)
// }

function freqSeq(str, sep) {
  let split = str.split("");

  var y = split.reduce((pv, cv) => {
    pv[cv] = pv[cv] ? pv[cv] + 1 : 1;
    return pv;
  }, {});

  let split2 = split.map((value, index, array) => {
    return y[value];
  }).join(sep);

  console.log(split);
  console.log(y);
  console.log(split2);
}

console.log(freqSeq("hello world", "-"));

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
//   Test.assertEquals(freqSeq('19999999',    ':'), '1:7:7:7:7:7:7:7');
//   Test.assertEquals(freqSeq('^^^**$',      'x'), '3x3x3x2x2x1');

//     });
//   });
