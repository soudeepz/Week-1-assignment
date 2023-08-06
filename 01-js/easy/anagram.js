/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortString(text) {
  text = text.toLowerCase();
  let array = text.split("");
  let sortedArray = array.sort();
  return sortedArray.join('');
}

function isAnagram(str1, str2) {
  let sortStr1 = sortString(str1);
  let sortStr2 = sortString(str2);
  if (sortStr1 === sortStr2) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
