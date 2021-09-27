function stat(strg) {
  let split = strg.split(",");
  let arrayBase = split.map((x) => x.split("|"));
  console.log(arrayBase);
  let arrayMod = arrayBase.slice(0);
  // changing the hours to hours in minutes
  for (let i = 0; i < arrayMod.length; i++) {
    arrayMod[i][0] = arrayBase[i][0] * 60;
  }
  // changing the seconds to seconds in minutes
  for (let i = 0; i < arrayMod.length; i++) {
    arrayMod[i][2] = arrayBase[i][2] / 60;
  }
  // parsenting the middle
  for (let i = 0; i < arrayMod.length; i++) {
    arrayMod[i][1] = parseInt(arrayMod[i][1]);
  }
  // multiply all by 100 so we can divide later
  for (let i = 0; i < arrayMod.length; i++) {
    for (let ii = 0; ii < arrayMod[i].length; ii++) {
      // each indivdual number
      //   console.log(arrayMod[i][ii]);
      arrayMod[i][ii] = arrayMod[i][ii] * 100;
    }
  }
  // convert it all to one number with reduce, and then sort it. Sorted data will be used to find our final mean, median and mode

  let finalNum = arrayMod
    .map((x) => {
      return x.reduce((a, b) => a + b, 0);
    })
    .sort((a, b) => a - b);

  // creating functions mean, mediam, mode

  // standard numbers
  let first = finalNum[0];
  let last = finalNum[finalNum.length - 1];
  let middle = finalNum.length / 2;

  // mean
  let average = finalNum.reduce((a, b) => a + b, 0) / finalNum.length;
  console.log(`average = ${average}`);

  // median
  let median;
  // if length is even it will take the middle indexes and average them
  if (finalNum.length % 2 == 0) {
    median = (finalNum[middle] + finalNum[middle - 1]) / 2;
  } else median = finalNum[Math.floor(middle)];
  console.log(`median = ${median}`);

  //   range
  let range = last - first;
  console.log(`range = ${range}`);

//   push mean median and mode into the array, eliminate the rest


finalNum.unshift(median)
finalNum.unshift(average)
finalNum.unshift(range)
finalNum.splice(3)
console.log(finalNum)
  // divide by 6000, convert it to strings so we can split
  let finalNum2 = finalNum
    .map((x) => x / 6000)
    .map((x) => x.toFixed(5).toString().split("."));
  // convert all percentages to minutes
  for (let i = 0; i < finalNum2.length; i++) {
    finalNum2[i][1] = ((finalNum2[i][1] / 1000) * (6 / 10)).toFixed(4);
    console.log(finalNum2[i][1]);
    finalNum2[i][1] = finalNum2[i][1].toString().split(".");
    console.log(finalNum2[i][1][1]);
    finalNum2[i][1][1] = ((finalNum2[i][1][1] / 100) * (6 / 10)).toFixed(0);
  }
  // split again
  let x = finalNum2
    .join(" ")
    .split(" ")
    .map((x) => x.replace(/[ ]*,[ ]*|[ ]+/g, "|"));

  // console.log(split)
  console.log(arrayMod);
  console.log(finalNum);
  console.log(finalNum2);
  console.log(x);
return `Range: 0${x[0]} Average: 0${x[1]} Median: 0${x[2]}`
}

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));

// describe("Basic tests",function() {
//     Test.assertEquals(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"),
//         "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
