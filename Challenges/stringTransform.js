#!/usr/bin/node
/**
 * @param {string} str - String to be reversed
 * @returns {string} - String that has been reversed.
 */
function reversestr(str) {
  const noSpacesStr = str.replace(/\s+/g, ''); // Remove all spaces
  return String(noSpacesStr.split('').reverse().join(''));
}

/**
 * @param {string} str - String to be converted to ASCII codes
 * @returns {number[]} - Array of ASCII codes
 */
function stringToAscii(str) {
  let asciiCodes = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    asciiCodes.push(charCode); // Add numeric code
  }
  return asciiCodes.join(' '); // Return the ASCII codes as a string
}

/**
 * @param {string} str - String to be transformed
 * @returns {(string|number[])} - A transformed string based on the following rules: 
 *            1. If the string length is divisible by 15, reverse the string and convert it to ASCII codes.
 *            2. If the string length is divisible by 3, reverse the string.
 *            3. If the string length is divisible by 5, convert the string to ASCII codes.
 *            4. If the string length is not divisible by 3, 5, or 15, return the string as is.
 * 
 */
function stringTransform(str) {
  // check if the string length is divisible by 15 first
  if (str.length % 15 === 0) {
    // reverse the string and convert it to ASCII codes
    return stringToAscii(reversestr(str));    
  }
  // check if the string length is divisible by 3
  else if (str.length % 3 === 0) {
    return reversestr(str);
  }
  // check if the string length is divisible by 5
  else if (str.length % 5 === 0) {
    return stringToAscii(str);
  }
  else {
    // Return the string as is if neither of the conditions are met.
    return str;
  }
}

/**
 * Main function to define the string and call the stringTransform function
 */
function main() {
  const string1 = "abcdefghijklmno"; // length divisable by 15
  const string2 = "Hamburger"; // length divisable by 3
  const string3 = "Pizza"; // length divisable by 5
  const string4 = "Chocolate Chip Cookie"; 
  const string5 = "abcdefg"; // length not divisable by neither 3 nor 5 nor 15
  const result1 = stringTransform(string1); // Calling stringTransform and get the result
  const result2 = stringTransform(string2); // Calling stringTransform and get the result
  const result3 = stringTransform(string3); // Calling stringTransform and get the result
  const result4 = stringTransform(string4); // Calling stringTransform and get the result
  const result5 = stringTransform(string5); // Calling stringTransform and get the result

  console.log(result1); // Output the result
  console.log(result2); // Output the result
  console.log(result3); // Output the result
  console.log(result4); // Output the result
  console.log(result5); // Output the result
}

main(); // Call the main function