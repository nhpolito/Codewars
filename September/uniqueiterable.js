function uniquer(x) {
  return x
    .map((item, index) => {
      if (x[index - 1] != item) {
        return item;
      }
    })
    .filter((x) => x);
}

var uniqueInOrder = function (iterable) {
  // filter for non arrays (non objects)
  console.log(typeof iterable);
  if (typeof iterable != "object") {
    let x = iterable.split("");
    // return map item if the index before the item does not equal the item
    // filter item for true values
    return uniquer(x);
    console.log(y);
  }
  return uniquer(iterable);
};

console.log(uniqueInOrder(`AAAABBBCCDAABBB`));
/*
  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
