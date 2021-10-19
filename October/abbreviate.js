function abbreviate(word) {
    let wordLength = word.length
    let replace = wordLength - 2
    console.log(replace)
    if (word.length < 4) {
        return word
    }

    console.log(word)
    let splitWord = word.split("")
    console.log(splitWord)

    let firstandLast = splitWord.filter((x,index) => {
        if ( index < 1 || index == wordLength-1) return x
    })

    let y = [firstandLast[0], replace, firstandLast[1]].join("")

    return(y)



}


let final = abbreviate("rides")
console.log(final)