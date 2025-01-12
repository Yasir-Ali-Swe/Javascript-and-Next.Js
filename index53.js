// Random Joke Generator
function getRandomJoke() {
  const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why couldn’t the bicycle stand up by itself? It was two tired.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why did the math book look sad? It had too many problems.",
  ];

  // Pick a random joke
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

// Call the function and log the joke
console.log("Here's a joke for you: " + getRandomJoke());
