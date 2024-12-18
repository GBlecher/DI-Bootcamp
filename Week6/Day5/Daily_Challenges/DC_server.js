const express = require('express')
const { getRandomEmoji} = require('./public/script.js')
const cors = require('cors')
const app = express()
const PORT = 5002
app.use(cors())
app.use(express.json())
app.use("/", express.static(__dirname + "/public"))

app.listen(PORT, () => {
    console.log((`run on ${PORT}`));
})

let currentEmoji = null;
    let playerScore = 0;
    const leaderboard = [];

const emojis = [
    {
        character: "😀",
        name: "Grinning Face"
    },
    {
        character: "🐱",
        name: "Cat Face"
    },
    {
        character: "🌮",
        name: "Taco"
    },
    {
        character: "🚀",
        name: "Rocket"
    },
    {
        character: "🎉",
        name: "Party Popper"
    },
    {
        character: "🍕",
        name: "Pizza"
    },
    {
        character: "🏝️",
        name: "Desert Island"
    },
    {
        character: "🐳",
        name: "Whale"
    },
    {
        character: "🎶",
        name: "Musical Notes"
    },
    {
        character: "🏆",
        name: "Trophy"
    },
    {
        character: "⚽",
        name: "Soccer Ball"
    },
    {
        character: "👾",
        name: "Alien Monster"
    },
    {
        character: "🦄",
        name: "Unicorn"
    },
    {
        character: "🍉",
        name: "Watermelon"
    },
    {
        character: "⛷️",
        name: "Skier"
    },
    {
        character: "🎨",
        name: "Artist Palette"
    },
    {
        character: "🧙",
        name: "Mage"
    }
];


app.get('/api/emojis', (req, res) => {
    res.json(emojis)
})

app.get('/api/emojis/game', (req, res) => {
    const currentEmoji = getRandomEmoji(emojis)
    const emojidiplay = document.getElementById("emoji-display")
    emojidiplay.appendChild(currentEmoji.character)
    const distractors = emojis.filter(emoji => emoji != currentEmoji)
    const selectedDistractors = []

    while (selectedDistractors.length < 3) {
        const randomIndex = Math.floor(Math.random() * distractors.length)
        const distractor = selectedDistractors[randomIndex]
        if (!selectedDistractors.includes(distractor)) {
            selectedDistractors.push(distractor);
        }
    }
    const options = [currentEmoji, ...selectedDistractors];
    options.sort(() => Math.random() - 0.5); // Shuffle the options

    res.json({ emoji: currentEmoji, options });

})