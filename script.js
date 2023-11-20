// Function to check if two values are of the same type
function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if both values have the same type
  return typeof value1 === typeof value2;
}

// Prompt the user for input
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Display the result using the isSameType function
alert(isSameType(value1, value2));
