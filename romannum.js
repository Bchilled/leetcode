
/**
 * @param {string} s
 * @return {number}
 */
// Roman Numerals ()
// https://leetcode.com/problems/roman-to-integer/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 
var romanToInt = function (s) {
    let x = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "I") {
        if (s[i + 1] == "V") {
          x += 4;
          i++;
        } else if (s[i + 1] == "X") {
          x += 9;
          i++;
        } else {
          x += 1;
        }
      } else if (s[i] == "V") {
        x += 5;
      } else if (s[i] == "X") {
        if (s[i + 1] == "L") {
          x += 40;
          i++;
        } else if (s[i + 1] == "C") {
          x += 90;
          i++;
        } else {
          x += 10;
        }
      } else if (s[i] == "L") {
        x += 50;
      } else if (s[i] == "C") {
        if (s[i + 1] == "D") {
          x += 400;
          i++;
        } else if (s[i + 1] == "M") {
          x += 900;
          i++;
        } else {
          x += 100;
        }
      } else if (s[i] == "D") {
        x += 500;
      } else if (s[i] == "M") {
        x += 1000;
      }
    }
    return x;
  };
  
  let answer = romanToInt("MCMXCIV");
  console.log(answer === 1994)
  
  answer = romanToInt("LVIII");
  console.log(answer === 58)
  
  answer = romanToInt("III");
  console.log(answer == 3)