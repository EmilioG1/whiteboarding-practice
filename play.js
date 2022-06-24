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