function spinWords(string) {
  return string
    .split(" ")
     .map((x) => {
      if (x.length > 4) {
        //   in order to reverse x we must first make it an array, then we must revesre the array, then we can join the arry
        return x.split("").reverse().join("");
      } else return x;
    })
    .join(" ");
  //TODO Have fun :)
}

console.log(spinWords("Hey fellow warriors"));
