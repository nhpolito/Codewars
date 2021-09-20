function isValidWalk(walk) {
  // reduce walk into an object that contains the direction and the amount of times taken that direction
  let x = walk.reduce((previousValue, currentValue) => {
    if (!previousValue[currentValue]) {
      previousValue[currentValue] = 0;
    }
    previousValue[currentValue]++;

    return previousValue;
  }, {});
  console.log(x)
  //create an array out of the object that contains the amount of times stepped in each direction
  let test = Object.values(x);
  //create a time by counting the total amount of steps (1 step - 1 minutes)
  let time = test.reduce((pv, cv) => {
    return cv + pv;
  });
  console.log(time);
  // return false if it does not take 10 minutes
  if (time != 10) {
    return false;
  }
  // return false if the direction walked was not even
  console.log(test);
  if (test.length % 2 != 0) {
    return false;
  }
  // return true if not false so far, and if every value of the test array is equal to the same thing
  return test.every((value) => {
    return value == test[0];
  });
}

console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
