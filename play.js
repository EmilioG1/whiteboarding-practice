function unique(string) {
  let notUnique = '';
  for (let x = 0; x < string.length; x++) {
    if (notUnique.includes(string[x]) === false) {
      notUnique += string[x]
    }
  }
  console.log(notUnique)
  if (string === notUnique) {
    return true
  } else {
    return false
  }
}

console.log(unique('hello'))
// console.log(unique('copyright'))


