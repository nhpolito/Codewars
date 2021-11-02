function wave(str) {
  let arr = [];
  let i = 0;
  while (i < str.length) {
    i++;
    arr.push(str);
  }

  let newer = arr.map((value, index, array) => {
    let letter = value[index]
    return value.replace(letter, letter.toUpperCase())+ ' ';
  });

  console.log(arr);
  return newer
}
console.log(wave("hello"));
