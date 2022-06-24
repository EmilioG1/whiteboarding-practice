function comp(string) {
  let array = string.split('');
  let count = 1;
  let final = '';

  for (let i = 0; i <= array.length; i++) {
    if (array[i] === array[i + 1]) {
      count++;
    } else {
      final += count + array[i]
      count = 1
    }
  }
  return final.replace(1, '')
}

console.log(comp("aaabccdddda"))