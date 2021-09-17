function accum(s) {
  return s
    .split("")
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join("-");
}

// console.log(accum("cwAt"));

// the repeat funciton is what I as looking for
function accum2(s) {
  console.log([...s]);

  return [...s]
    .map((element, index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index);
    })
    .join("-");
}

console.log(accum2("cwAt"));
// "C-Ww-Aaa-Tttt"
