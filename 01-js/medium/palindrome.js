/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverseStr(str) {
  let strArray = str.split('');
  let revArray = [];
  for (var i = strArray.length; i > 0; i--) {
    revArray.push(strArray[i-1]);
  }
  let revStr = revArray.join('');
  return revStr;
}

function removeSpecialChars(str){
  let cleanStr = str.replace(/[^a-zA-z0-9]/g, '');
  return cleanStr;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = removeSpecialChars(str);
  var revStr = reverseStr(str);
  if(str !== revStr){
    return false;
  }
  return true;
}

console.log(reverseStr("Nan nan"));

module.exports = isPalindrome;
