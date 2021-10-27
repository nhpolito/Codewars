function highestRank(arr) {
  // count all of the items in the arr
  let reduced = arr.reduce((pv, cv) => {
    if (!pv[cv]) {
      pv[cv] = 0;
    }
    pv[cv] = pv[cv] + 1;
    return pv;
  }, {});

  // create an array with number count and values
  let array = [];
  for (let i in reduced) {
    array.push([i, reduced[i]]);
    console.log(i);
  }

  console.log(array);

  //   sort items by second array item length
  let reduced2 = array
    .sort((a, b) => {
      return a[1] < b[1] ? 1 : -1;
    })
    .filter((item, index, array) => item[1] == array[0][1])
    .sort((a, b) => {
      return parseInt(a) < parseInt(b) ? 1 : -1;
    })[0][0]

  console.log(reduced2);
  return parseInt(reduced2);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample tests", function() {
//   it("should test", function() {
//     var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
//     assert.strictEqual( highestRank(arr), 12);
//   });
// });
