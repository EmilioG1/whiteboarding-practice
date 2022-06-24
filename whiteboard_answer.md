Write an algorithm  checking for a strings uniqueness.
Return a bool
Any string, elements could be letters or numbers
For loop to iterate through string elements
If statement within to compare elements already included in string

function unique(string) {
	let secondString = ‘’;
	// added alert for edge cases, could refactor for better handling
	if (string === NaN) {
		for (let x = 0; x < string.length; x++) {
			if (secondString.includes(string[x]) === false) {
				secondString += string[x]
			}
		}
		if (string === secondString) {
			return true
		} else {
			return false
		}
	} else {
		alert(‘You must enter a string’)
	} 
}

unique(‘hello’)
// expect false

unique(‘copyright’)
// expect true