function hasTargetSum(array, target) {

  const seenNumbers = {}
  
  for(let i = 0; i < array.length; i++){

    const complement = target - array[i]

    if(seenNumbers[complement]) return true

    seenNumbers[array[i]] = true
}

return false 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  function of target sum.
  if integer 1 + integer 2 = ? return true
  else, return false
  TEST CASE: ([3, 8, 12, 10, 5],15)
*/

/*
 Have a series of numbers in an array.Also, have a target number.
  Iterate through the array
 and find two numbers that add to the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
