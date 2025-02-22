const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why was the math book sad? It had too many problems.",
    // ... Add your jokes here to reach a total of 500 jokes
    "Why don't oysters share their pearls? Because they're shellfish!",
    "What do you call a belt made of watches? A waist of time!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you get if you cross a snowman and a vampire? Frostbite!",
    // ... Keep adding jokes up to 500
];

// (For brevity, not listing all 500 jokes here, but you get the idea to keep adding more).

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
