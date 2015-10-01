// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b) {
  var a = 3;
  var b = 5;
  if ( 3 > 5 ) {
    return 3
  } else {
    return 5
  }
};
undefined
max();
5


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

var a = 3;
var b = 5;
var c = 7;
var greater;
var  greatest;
function maxOfThree(a, b, c) {
  if ( a > b ){
    greater = a;
  } else {
    greater = b;
  }
  if ( greater > c ){
    greatest = greater;
  } else {
    greatest = c;
    return greatest;
  }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){

var bands = ['ABC', 'Bananarama', 'Culture Club', 'Duran Duran', 'Eurythmics']
bands.reverse();
["Eurythmics", "Duran Duran", "Culture Club", "Bananarama", "ABC"]
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var str = string.split('');
  var longest = 0;
  var word = null;
  str.forEach(function(str) {
    if (longest < str.length) {
      longest = str.length;
      word = str;
    }
  });
  return word;
}
console.log(longestWord('chocolate', 'cheese', 'chicken')); 


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  var list = {abbabcbdbabdbdbabababcbcbab"};
  var length = string.length;
  for (var i = 0; i < length; i++) {
    if (string.charAt(i) in list)
      list[string.charAt(i)] += +1;
    else
      list[string.charAt(i)] = 1;
  }
  return list;
}
