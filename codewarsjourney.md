# Documenting my Journey in Codewars
The point of this markdown is to document my progress working in codewars.

## Table of Contents
- [Documenting my Journey in Codewars](#documenting-my-journey-in-codewars)
  - [Table of Contents](#table-of-contents)
    - [September](#september)
      - [Mumbling](#mumbling)
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
**Learning Targets**

-***I learned that the second paramater of map, filter, and reduce is index***

-***the string.prototype.repeat() method will returns new string that contains the specified number of copies of the string on which it was called, concatenated together***

-***".join(x)" will concatenate an array via the commas, replacing the paramater__***

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


##### [TOC](#table-of-contents)

### October
### November
### December