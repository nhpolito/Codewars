function upArray(arr) {
  let checker = arr.every((value) => value >= 0);
  console.log(checker);
  if (checker == false) {
    return null;
  }
  // reduce each number to string - get total number
  let reduced = arr.reduce((pv, cv) => {
      pv = pv.toString() + cv.toString()
    return pv;
  }, );

  let finalNumber = parseInt(reduced)

  return (finalNumber + 1).toString().split("").map(x => parseInt(x))
}

console.log(upArray([2, 3, 9, 9]));
