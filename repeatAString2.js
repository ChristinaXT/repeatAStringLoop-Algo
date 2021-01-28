// Repeat a string
//
// Repeat a given string (first argument) num times (second argument)
// Return an empty string if num is not a positive number
//one option :
//with for loop

function repeatStringNumTimes (str, num) {
  let string = "";
  if (num < 0) return "";

  for (let i=0; i<num; i++) {
    string += str;
  }
  return string;
}

console.log(repeatStringNumTimes("abc", 8));
