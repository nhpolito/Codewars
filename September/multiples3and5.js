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