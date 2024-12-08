// /*1st daily challenge */
// function makeAllCaps(array) {

//     return new Promise((resolve, reject) => {
//         if (array.every(item => typeof item === 'string')) {
//             resolve(array.map(item => item.toUpperCase()))
//         } else {
//             reject("Not all elements are strings")
//         }
//     })
// }

// function sortWords(allCappedArray)
// {
//     return new Promise((resolve, reject) => {
//         if (allCappedArray.length > 4) {
//             resolve(allCappedArray.sort())
//         }
//         else {
//             reject("Not enough elements")
//         }
//     })
// }



// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))
/*___________________________________________________________________________________________________*/
/*2nd daily challenge*/


const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
function toJs(){
    return new Promise((resolve, reject) => {
        morseJS = JSON.parse(morse)

        if(Object.keys(morseJS).length ===0){
            reject("The object is empty.")
        }
        else{
            resolve(morseJS)
        }
    })
}

function toMorse(morseJS){
    const userString = prompt(" enter a string")
    const userStringArr = [...userString]
    return new Promise((resolve, reject) => {
        if (userStringArr.every(letter => morseJS.hasOwnProperty(letter))) {
            const morseArray = userStringArr.map(letter => morseJS[letter])
            resolve(morseArray)
        } else {
            reject("string consists of atleast on invalid letter")
        }
    })
    
}
function joinWords(morseArray){
    for( Elem of morseArray )
    {
        console.log(Elem + "\n")
    }

}


toJs()
    .then(morseJS => {
        return toMorse(morseJS);
    })
    .then(morseArray => {
        joinWords(morseArray);
    })
    .catch(error => {
        console.error("Error:", error);
    });

