function twoNum (arr) {
    let array = [1,2,3,-2]
    let value = ["False"]
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            if (i !== k) {
                if (array[i] + array[k] === 0) {
                    value = "true"
                }
            }
        }
    }
    return value
}

function uniqueChar(word) {
    let obj = {}
    for (let i = 0; i < word.length; i++){
    let uChar = word[i]
    if (obj[uChar]) return false
    obj[uChar] = true
    }
    return true 
}

console.log(uniqueChar('Monday'))
console.log(uniqueChar('Moonday'))



const isPangram = (string) => {
    alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
    string = string.toLowerCase();
    return alphabets.every(arr => string.includes(arr));
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"));

function findLongestWord(word) {
    for (let i = 0; i < word.length; i++){
        if (word[i] > 0) {
            return length
        }
    }
}