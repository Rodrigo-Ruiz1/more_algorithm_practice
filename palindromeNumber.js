// Given an integer XMLDocument, return true if x is a palindrome integer.

let x = 121
const isPalindrome = (x) => {
    let revnum = x
    if (x < 0) {
        return false
    } else {
        revnum = revnum.toString()
        revnum = revnum.split('')
        revnum = revnum.reverse()
        revnum = revnum.join('')
        revnum = parseInt(revnum)
        if (revnum === x) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}

const cleanPalindrome = (x) => {
    let revnum = x
    if (x < 0) {
        return false
    } else {
        revnum = revnum.toString().split('').reverse().join('')
        revnum = parseInt(revnum)
        if (revnum === x) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
// isPalindrome(x)
cleanPalindrome(x)