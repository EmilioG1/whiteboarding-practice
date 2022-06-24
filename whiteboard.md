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