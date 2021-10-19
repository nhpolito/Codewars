function validBraces(braces) {
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    console.log(currentChar);
    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
      console.log(stack);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

console.log(validBraces("([{}])"));

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
