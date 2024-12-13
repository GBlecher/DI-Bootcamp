const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())


app.use("/", express.static(__dirname + "/public"))
const PORT = 5002
app.listen(PORT, () => {
    console.log((`run on ${PORT}`));

    let currentEmoji = null;
    let playerScore = 0;
    const leaderboard = [];

})
const emojis = [
    {
        character: "😀",
        name: "Grinning Face"
    },
    {
        character: "😃",
        name: "Grinning Face with Big Eyes"
    },
    {
        character: "😄",
        name: "Grinning Face with Smiling Eyes"
    },
    {
        character: "😅",
        name: "Grinning Face with Sweat"
    },
    {
        character: "🤣",
        name: "Rolling on the Floor Laughing"
    },
    {
        character: "😂",
        name: "Face with Tears of Joy"
    },
    {
        character: "😊",
        name: "Smiling Face with Smiling Eyes"
    },
    {
        character: "😇",
        name: "Smiling Face with Halo"
    },
    {
        character: "😉",
        name: "Winking Face"
    },
    {
        character: "😍",
        name: "Smiling Face with Heart-Eyes"
    },
    {
        character: "😎",
        name: "Smiling Face with Sunglasses"
    },
    {
        character: "😢",
        name: "Crying Face"
    },
    {
        character: "😡",
        name: "Pouting Face"
    },
    {
        character: "😱",
        name: "Face Screaming in Fear"
    },
    {
        character: "👍",
        name: "Thumbs Up"
    },
    {
        character: "👎",
        name: "Thumbs Down"
    },
    {
        character: "❤️",
        name: "Red Heart"
    }
];

function getRandomEmoji(emojiArray) {
    const randomIndex = Math.floor(Math.random() * emojiArray.length);
    return emojiArray[randomIndex];
}




app.get('/api/emojis', (req, res) => {
    res.json(emojis)
})

app.get('/api/emojis', (req, res) => {
    currentEmoji = getRandomEmoji(emojis)

    const distractors = emojis.filter(emoji => emoji != currentEmoji)
    const selectedDistractors = []

    while (selectedDistractors.length < 3) {
        const randomIndex = Math.floor(math.random() * distractors.length)
        const distractor = selectedDistractors[randomIndex]
        if (!selectedDistractors.includes(distractor)) {
            selectedDistractors.push(distractor);
        }
    }
    const options = [currentEmoji, ...selectedDistractors];
    options.sort(() => Math.random() - 0.5); // Shuffle the options

    res.json({ emoji: currentEmoji, options });

})