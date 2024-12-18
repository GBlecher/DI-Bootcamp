
async function getEmoji()
{
    try {
        const res = await fetch("http://localhost:5002/api/emojis/game ");
        const data = await res.json();
        console.log(data);
        render(data)
        
      } catch (error) {
        console.log(error);
      }
    }
getEmoji()

function getRandomEmoji(emojiArray) {
  const randomIndex = Math.floor(Math.random() * emojiArray.length);
  return emojiArray[randomIndex];
}




const render = (arr) =>{

  document.getElementById()
    const html = arr.map((item)=> {
        return `<div>${item.name} ${item.email}</div>`
    }).join('')
    document.getElementById("container").innerHTML = html
}

module.exports = {
  getEmoji,
  getRandomEmoji 
}