function order(words) {
  let split = words.split(" ");

  // creating a function to return the first number from a string
  function converter(x) {
    return x
      .split("")
      .filter((x) => {
        return x * 1;
      })
      .map((x) => parseInt(x))[0];
  }

  // sorting our array by the value of the number contained in the string,
  // use converter function to return number to sort method
  // must use 1 & -1
  let final = split.sort((a, b) => {
    return converter(a) > converter(b) ? 1 : -1;
  });

  console.log(split);
  return final.join(" ");
  console.log(converter("freakk33"));
  return words;
}

console.log(order("is2 Thi1s T4est 3a"));
//   "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
