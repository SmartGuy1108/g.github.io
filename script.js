const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why was the math book sad? It had too many problems.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you get if you cross a snowman and a vampire? Frostbite!",
    "Why don’t oysters share their pearls? Because they're shellfish!",
    "What do you call a belt made of watches? A waist of time!",
    "I would avoid the sushi if I was you. It’s a little fishy.",
    "Want to hear a joke about construction? I’m still working on it.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "Want to hear a joke about a piece of paper? Never mind... it's tearable.",
    "I just watched a program about beavers. It was the best dam program I've ever seen.",
    "What did one hat say to the other? Stay here, I'm going on ahead.",
    "Last night I dreamt I was a muffler. I woke up exhausted.",
    "Did you hear about the Italian chef who died? He pasta way.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you get when you cross a snowman and a dog? Frostbite.",
    "What do you call an alligator in a vest? An investigator.",
    "Why did the chicken go to the seance? To talk to the other side.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why did the coffee file a police report? It got mugged.",
    "How does a penguin build its house? Igloos it together.",
    "What’s orange and sounds like a parrot? A carrot.",
    "What do you get if you cross a cat with a dark horse? Kitty Perry.",
    "Why couldn’t the bicycle stand up by itself? It was two tired.",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What do you get if you cross a snowman and a vampire? Frostbite!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What did one hat say to the other? Stay here, I'm going on ahead.",
    // Add more jokes here to reach a total of 500.
];

const jokeBtn = document.getElementById('joke-btn');
const jokeDisplay = document.getElementById('joke');
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

jokeBtn.addEventListener('click', () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeDisplay.textContent = randomJoke;
});

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});
