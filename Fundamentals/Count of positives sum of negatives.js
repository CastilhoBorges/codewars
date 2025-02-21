function countPositivesSumNegatives(input) {
  var newArr = [];
  var positiveNumber = 0;
  var negativeNumber = 0;

  // Validate Input
  if (input === null || input.length === 0) return newArr;

  // Loop through array of Numbers
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 0) continue;
    // Count positives
    else if (input[i] > 0) positiveNumber++;
    // Sum negatives
    else if (input[i] < 0) negativeNumber += input[i];
  }

  // Prepare Output
  newArr.push(positiveNumber);
  newArr.push(negativeNumber);

  return newArr;
}

console.log(countPositivesSumNegatives([5, 5, -9, 10, -50, 50, -56, 100]));
