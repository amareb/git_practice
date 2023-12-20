// Create an object to store message components
const messageComponents = {
  greetings: ["Hello", "Hi", "Greetings"],
  subjects: ["world", "friend", "you"],
  actions: ["enjoy", "embrace", "celebrate"],
  endings: ["a wonderful day!", "an amazing journey!", "a fantastic time!"],
};

// Function to generate a random message
function generateRandomMessage() {
  // Helper function to get a random element from an array
  const getRandomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

  // Generate a message using random components
  const greeting = getRandomElement(messageComponents.greetings);
  const subject = getRandomElement(messageComponents.subjects);
  const action = getRandomElement(messageComponents.actions);
  const ending = getRandomElement(messageComponents.endings);

  // Combine components to create the final message
  const finalMessage = `${greeting}, ${subject}! ${action} ${ending}`;

  return finalMessage;
}

// Example: Generate and log a random message
const randomMessage = generateRandomMessage();
console.log(randomMessage);
