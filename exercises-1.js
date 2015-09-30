///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(a, b) {
var a = 1;
var b = 2;
return a + b;
}
undefined
sum();
3


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function average(a, b, c) {
var a = 1;
var b = 2;
var c = 3;
return (a + b + c) / 3;
};
undefined
average();
2


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

 function getLength(boy) {
 return boy.length;
 };


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var a = 1;
var b = 9;
undefined
function greaterThan(a, b) {
  if ( b > a )  {
    return true
  } else {
    return false
  }
};
undefined
greaterThan();
false

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var name = 'Spanky';
undefined
name;
"Spanky"
function greet(name) {
return 'How\'s it hangin\', ' + name + '?';
};
undefined
greet();
"How's it hangin', undefined?"
greet(name);
"How's it hangin', Spanky?"


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var word1 = 'ant';
var word2 = 'twerked';
var word3 = 'blanket';
var word4 = 'pie';

function madlib(word1, word2, word3, word4) {
  return 'The ' + word1 + ' ' + word2 + ' across the picnic ' + word3 + ' toward the ' + word4 + '.';
};
undefined
madlib();
"The undefined undefined across the picnic undefined toward the undefined."
madlib(word1, word2, word3, word4);
"The ant twerked across the picnic blanket toward the pie."


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////