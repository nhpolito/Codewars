# Documenting my Journey in Codewars
The point of this markdown is to document my progress working in codewars.

## Table of Contents
- [Documenting my Journey in Codewars](#documenting-my-journey-in-codewars)
  - [Table of Contents](#table-of-contents)
    - [September](#september)
      - [Mumbling](#mumbling)
      - [Disemvowel](#disemvowel)
      - [Multiples of 3 and 5](#multiples-of-3-and-5)
        - [TOC](#toc)
    - [October](#october)
    - [November](#november)
    - [December](#december)
### September
#### [Mumbling](September/mumbling.js)
**Input to Output**
```
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```
Answer
```JavaScript
function accum2(s) {
  console.log([...s]);

  return [...s]
    .map((element, index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index);
    })
    .join("-");
}

console.log(accum2("cwAt"));
```
**Learning Targets**

-***I learned that the second paramater of map, filter, and reduce is index***

-***the string.prototype.repeat() method will returns new string that contains the specified number of copies of the string on which it was called, concatenated together***

-***".join(x)" will concatenate an array via the commas, replacing the paramater__***
#### [Disemvowel](September/disemvowel.js)
**Input to Output**
```
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
```

---
Answer
```JavaScript
function disemvowel(str) {
    // pass all vowels lower and uppercase into an array
    let z = "aeiouAEIOU".split("")
    // split str into an array
    let string = str.split("")
    console.log(z)
    console.log(string)
    // call filter method on string to return all items that do not exist in the z (vowels) array, it then joins these items with the join method
    return string.filter( x => {
       return (z.indexOf(x) == -1)
    }).join("");
  }

console.log(disemvowel("This website is for losers LOL!"))

    // Factored Solution
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```
**Learning Targets**

-***The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.***
-***for example .replace(/[aeiou]/gi,"") will replace vowels with nothing, the g = do a pattern more than once, and the i = upper and lowercase***

#### [Multiples of 3 and 5](September/multiples3and5.js)
**Input to Output**
```
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
```

**Answer**
```JavaScript
function solution(number){
    if (number < 0) {
      return 0
    }
    if (number.length == 0) {
      return undefined}
    let arr1 = []
    for (let i = 1; i<number; i++) {
      arr1.push(i)
    }
    let z = arr1.filter(function(x){
    return test1(x)
    })
    if (z.length == 0) {
      return undefined}
    return z.reduce((a,b)=>a+b)
  }
  
  function test1(x) {
    if (x % 3 ==0 || x % 5 == 0) {
      return true}
      else return false
  }
  
  console.log(test1(7))
 console.log(solution(10))
 ```
 **Learning Targets**
 ***-const reducer = (previousValue, currentValue) => previousValue + currentValue;***
 ***-reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)***
##### [TOC](#table-of-contents)

### October
### November
### December