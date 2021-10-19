function solution(str) {
  let z = [];
  let x = str.split("");
  console.log(x);
  while (x.length > 0) {
    z.push(x.slice(0, 2));
    x.shift();
    x.shift();
  }
  console.log(z);

  z = z.map((x) => x.join(""));

  z = z.map( (x) => {
    if (x.length == 1) {
      return x.concat('_');
    } else return x;
  });
  console.log(z);
  return z
  return str;


}

console.log(solution("abcdef"));

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
