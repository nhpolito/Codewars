function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }
  // find the longest lengts with a sort function
  let longest = strarr
    // map the words combined consecutively k times
    .map((x, index, array) => {
      return array.slice(index, index + k).join("");
    })
    // create a reduce function that returns the longest length of an item in the array,
    .reduce((cv, nv) => {
      if (nv.length > cv.length) {
        return nv;
      }
      return cv
    }, "");
  console.log(longest);
  return longest;
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)),
  "ixoyx3452zzzzzzzzzzzz";

// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }

// describe("longestConsec",function() {
// it("Basic tests",function() {
//     testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
//     testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
//     testing(longestConsec([], 3), "")
//     testing(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
//     testing(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
//     testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
//     testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
//     testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
//     testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
// })})
