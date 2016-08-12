exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++){
      sum += arr[i]
    };
    return sum
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] == item) {
        arr.splice(i, 1)
      };
    };
    return arr
  },

  reverseString : function(str) {
    return str.split('').reverse().join('')
  },

  longestSubString : function(str) {
    var subStrings = str.split(" ");
    var length = 0
    var longString
    for (var i = 0; i < subStrings.length; i++){
      if (subStrings[i].length > length){
        length = subStrings[i].length
        longString = subStrings[i]
      };
    };
    return longString
  },

  letterMoveForward : function(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var newString = ""
    for (var i = 0; i < str.length; i++){
      var index = alphabet.indexOf(str[i])
      if (index == 25) {
        newString += 'a'
      } else if (alphabet.includes(str[i])){
        newString += alphabet[index + 1]
      } else {
        newString += str[i]
      };
    };
    return newString;
  },

  capitalizeWords : function(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++){
      var letters = words[i].split("")
      letters[0] = letters[0].toUpperCase();
      words[i] = letters.join("");
    }
    return words.join(" ");
  }
};
