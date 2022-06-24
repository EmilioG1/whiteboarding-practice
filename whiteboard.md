Prompt 1
## Turning strings into URLs
* URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.
* You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

>Example
>Input: "Jasmine Ann Jones"

>Output: "Jasmine%20Ann%20Jones"

array = [];
function spaceSwap(str) {
  newStr = str.split("")
  newStr.forEach(function(i) {
    if (i === " ") {
      array.push("%20")
    } else {
      array.push(i)
    }
  })
  return array.join()
};

console.log(spaceSwap('Jasmine Ann Jones'))

OR a refactored option w/ arrow function and ternary operator

function spaceSwap(str) {
  array = [];
  newStr = str.split("")
  newStr.forEach(i => (i === " ") ? array.push("%20") : array.push(i))
  return array.join()
};



Prompt 2
## Array Deduping
* Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

>Example
>Input: [7, 9, "hi", 12, "hi" 7, 53]

>Output: [7, 9, "hi", 12, 53]

function dedup(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i]) === false) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(dedup([7, 9, "hi", 12, "hi", 7, 53]))


Prompt 3
## Compressing Strings
* Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

>Example
>Input: "aaabccdddda"

>Output: "3ab2c4da"

want to take a string. find how many times a letter occurs concurrently and compress them into a number with the letter appended

take a string, split it, loop through to see how many occurences of each element
maybe take out duplicates and put in another array?
add a counter...

Prompt 4
## Checking for Uniqueness
* Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

take a string, cant turn it into array! includes can be used for strings
for loop through the string
initialize empty string
if statement inside for loop
if new string includes element in old string === false... add element to new string
in separate if statement -> if string === new string then its true
    since only the characters that don't repeat are added to the new string
else its false... since any characters that match already added elements wont be included
    thus it won't match