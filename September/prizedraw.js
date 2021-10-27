function findMissingLetter(array) {
    if (array[0] == array[0].toUpperCase() ) {
        var capital = true
    } else {var capital = false}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")

let mapped = array.map(x => x.toLowerCase()).map((item,index,array) => {
    if ( (alphabet.indexOf(array[index+1]) - alphabet.indexOf(item))  == 2 ){
        console.log(alphabet.indexOf(item) + 1)
    
        return alphabet[alphabet.indexOf(item) + 1]
    }
}).filter(x => x !== undefined)

console.log(mapped)
console.log(alphabet)

let finalLetter = mapped.join()
console.log(finalLetter)

if (capital) {
    return finalLetter.toUpperCase()
} else return finalLetter

}

// describe("KataTests", function(){
//     it("exampleTests", function(){
//       Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
//       Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
//     });
//   });

console.log(findMissingLetter(['a','b','c','d','f']))

console.log('A'.charCodeAt())