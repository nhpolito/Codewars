# Documenting my Journey in Codewars
The point of this markdown is to document my progress working in codewars.

**Input and Output**
Is used to show the objective of the function
**Answer**
Is used to show a working solution
**Learning Target**
Is used to keep track of techniques used to achieve the solution
## Table of Contents
- [Documenting my Journey in Codewars](#documenting-my-journey-in-codewars)
  - [Table of Contents](#table-of-contents)
    - [September](#september)
      - [Mumbling](#mumbling)
        - [map, filter, reduce](#map-filter-reduce)
        - [[string.prototype.repeat(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)]](#stringprototyperepeathttpsdevelopermozillaorgen-usdocswebjavascriptreferenceglobal_objectsstringrepeat)
        - [Array.prototype.join()](#arrayprototypejoin)
      - [Disemvowel](#disemvowel)
        - [string.prototype.replace()](#stringprototypereplace)
      - [Multiples of 3 and 5](#multiples-of-3-and-5)
        - [Array.prototype.reduce()](#arrayprototypereduce)
      - [Count The Odds](#count-the-odds)
        - [Array.prototype.filter()](#arrayprototypefilter)
      - [Sum of digital root](#sum-of-digital-root)
        - [recursion](#recursion)
      - [wholikesit?](#wholikesit)
        - [Array.prototype.shift](#arrayprototypeshift)
        - [JavaScript Template Literals](#javascript-template-literals)
      - [Is this a valid walk?](#is-this-a-valid-walk)
        - [Array.prototype.reduce](#arrayprototypereduce-1)
        - [Array.prototype.every](#arrayprototypeevery)
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
##### [map, filter, reduce](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/reduce)
-***I learned that the second paramater of map, filter, and reduce is index***

##### [string.prototype.repeat(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)]
-***the string.prototype.repeat() method will returns new string that contains the specified number of copies of the string on which it was called, concatenated together***

##### [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
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
##### [string.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
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
 ##### [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
 ***-const reducer = (previousValue, currentValue) => previousValue + currentValue;***
 ***-reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)***

#### [Count The Odds](September/amountofodds.js)
**Input and Output**
```[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
```
**answer**
```JavaScript
function findOdd(A) {
    for (let i of A) {
    // for i of A, filter A to see how many elements of I are in A,
    //  return the filtered array and then take the length of it 
    // place this filtered array into a variable called "filtered" 
    // filtered is now the amount of variable i within A
        console.log((A.filter(x => x===i).length))
    // if filtered divied by 2 does not equal 0 it is odd, return i when its filtered length is odd
    let filtered = A.filter(x => x==i).length
    if (filtered & 2 !=0) {return i}
    // console.log(A)
    }

  }


console.log(findOdd([0,1,0,1,4]))
```
**learning Targets**
##### [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
-***I believe that filtered can only return an existing item, it cannot return a new item see***

#### [Sum of digital root](September/sumofdigitalroot.js)
**Input and Output**
```
  16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```
**Answer**

```JavaScript
function digital_root(n) {
  if (n < 10) {return n} 
  else
  console.log(n)
//   recursively calling digital root passing in the reduced version of n as the new n
  return digital_root(n.toString().split("").reduce((pv, cv) => {return pv + +cv}, 0));
    
}

console.log(digital_root(493193));
```

**Learning Target**
##### [recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
***you can call a function inside of a function with a different argument***

#### [wholikesit?](September/wholikesit.js)
**Input and Output**
```
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```
**Answer**
```JavaScript
function likes(names) {
    console.log(names.length)
    if (names.length == 0) {
        return `no one likes this`
    }
    if (names.length == 1) {
        return `${names[0]} likes this`
    }
    if (names.length == 2) {
        return `${names[0]} and ${names[1]} like this`
    }
    if (names.length == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    if (names.length > 3)  {
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }

```
**Learning Target**
##### [Array.prototype.shift](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/shift)
-***returns the first item of the array***
##### [JavaScript Template Literals](https://www.w3schools.com/JS//js_string_templates.asp)

#### [Is this a valid walk?](September/isvalidwalk.js)
**Input and Output**
```
Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
Test.expect(!isValidWalk(['w']), 'should return false');
Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
```
**Answer**
```JavaScript
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
```
**Learning Target**
##### [Array.prototype.reduce](#arrayprototypereduce)
-***reduce can be initialized with an object to create an object out of array items. For example, here we used reduce create an object of keys that point to the driection, and values that are the amount of times that direction has been pressed***

##### [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
-***The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.***

##### [TOC](#table-of-contents)

### October
### November
### December