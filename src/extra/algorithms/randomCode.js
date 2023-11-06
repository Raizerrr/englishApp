function getRandomNumber(min, max) {
    // Ensure that the input values are valid numbers
    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new Error('Both min and max must be numbers');
    }
  
    // Ensure that min is less than or equal to max
    if (min > max) {
      throw new Error('Min must be less than or equal to max');
    }
  
    // Calculate the random number within the range
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNumber;
  }

  export default getRandomNumber