// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

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