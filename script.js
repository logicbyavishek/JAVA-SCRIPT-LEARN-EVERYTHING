/**
 * @param {string} str
 * @return {string}
 */
function isPalindromeInPlace(str) {
    // Write your code here
    let i=0
    let j = str.length-1
    let palindrome = true
    while(i<j){
        if(str.charAt(i)!=str.charAt(j)){
            palindrome=false
            break
        }
        i++
        j--
    }
    return palindrome==true?"Yes":"No"
}

module.exports = { isPalindromeInPlace };