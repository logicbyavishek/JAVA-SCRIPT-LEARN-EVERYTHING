/**
 * @param {string} str
 * @return {string}
 */
 
function reverseString(str) {
    // Write your logic here
    let rev = ""
    for(let i =str.length-1 ; i>=0 ; i--){
        rev+=str.charAt(i)
    }
    return rev
}

module.exports = { reverseString };