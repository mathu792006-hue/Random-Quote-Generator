// ============================================
// RANDOM QUOTE GENERATOR - JavaScript Logic
// ============================================

// STEP 1: STORE ALL QUOTES IN AN ARRAY
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Believe you can and you are halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Your time is limited, so do not waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal. It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Everything you have ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    }
];

// STEP 2: KEEP TRACK OF THE LAST SHOWN QUOTE
let lastQuoteIndex = -1;

// STEP 3: FUNCTION TO GET A RANDOM QUOTE (avoids repeating the same quote)
function getRandomQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex && quotes.length > 1);

    lastQuoteIndex = randomIndex;

    return quotes[randomIndex];
}

// STEP 4: CONNECT JAVASCRIPT TO HTML ELEMENTS
const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote-btn");

// STEP 5: FUNCTION TO DISPLAY A QUOTE ON SCREEN WITH FADE ANIMATION
function displayQuote() {
    const quote = getRandomQuote();

    // Remove animation class to reset effect
    quoteTextElement.classList.remove("fade-in");
    quoteAuthorElement.classList.remove("fade-in");

    setTimeout(function() {
        quoteTextElement.textContent = '"' + quote.text + '"';
        quoteAuthorElement.textContent = "— " + quote.author;

        // Add animation class back to trigger fade-in
        quoteTextElement.classList.add("fade-in");
        quoteAuthorElement.classList.add("fade-in");
    }, 10);
}

// STEP 6: ADD BUTTON CLICK FUNCTIONALITY
newQuoteButton.addEventListener("click", displayQuote);

// STEP 7: SHOW A QUOTE WHEN THE PAGE FIRST LOADS
displayQuote();