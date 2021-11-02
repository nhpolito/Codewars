function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let split = alphabet.split("");

    console.log(split);

    return text
        .toLowerCase()
        .split("")
        .map((item, index, array) => {
            return split.indexOf(item) + 1;
        })
        .filter((x) => (x > 0 ? true : false))
        .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));