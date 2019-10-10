sumArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumArray([1, 2, 3]))

let callback = (str) => {
    let parentheses = false
    let braces = false
    let brackets = false

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            parentheses = true
        } else if (str[i] == '{') {
            braces = true
        } else if (str[i] == '[') {
            brackets = true
        } else if (str[i] == ')' && parentheses == true) {
            parentheses = false
        } else if (str[i] == '}' && braces == true) {
            braces = false
        } else if (str[i] == ']' && brackets == true) {
            brackets = false
        }
    }

    if (parentheses == true || braces == true || brackets == true) {
        console.log(false)
    } else {
        console.log(true)
    }
}

let process = (callback) => {
    callback('{ [] () }')
        // callback('{ [ ( ] }')
        // callback('{ [ ]')
        // callback('{ 2 }')
        // callback('( ( 2')
}

process(callback)