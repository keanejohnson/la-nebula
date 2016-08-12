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

  },

  longestSubString : function(str) {

  },

  letterMoveForward : function(str) {

  },

  capitalizeWords : function(str) {

  }
};
