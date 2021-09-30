function findOutlier(integers) {
  let evens = integers.filter((x) => {
    return x % 2 == 0;
  });
  let odds = integers.filter((x) => {
    return x % 2 != 0;
  });
  if (evens.length == 1){
      return parseInt(evens.join())
  } else return parseInt(odds.join())
  console.log(evens);
  console.log(odds);

}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

//   [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
