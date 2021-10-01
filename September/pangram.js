function isPangram(string){
    let aplhabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    let lowercase = string.toLowerCase().split("")

    for (let i of aplhabet) {
        if ( lowercase.indexOf(i) === -1) {
            return false
        }
    }
    return true
   
  }

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))