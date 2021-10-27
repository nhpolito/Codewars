function multiplicationTable(row,col){
    let arr = []
    var i = 0
    while (i < col) {
        console.log(i)
        i++        
        arr.push([])
    }
    console.log(arr)
  }


console.log(multiplicationTable(2,2))

//   describe("Tests", () => {
//     it("test", () => {
//   Test.assertSimilar(multiplicationTable(2,2), [[1,2],[2,4]])
//   Test.assertSimilar(multiplicationTable(3,3), [[1,2,3],[2,4,6],[3,6,9]])
//   Test.assertSimilar(multiplicationTable(3,4), [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
//   Test.assertSimilar(multiplicationTable(4,4), [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
//   Test.assertSimilar(multiplicationTable(2,5), [[1,2,3,4,5],[2,4,6,8,10]])
//     });
//   });
  