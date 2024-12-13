
async function getEmoji()
{
    try {
        const res = await fetch("http://localhost:5002/api/emojis");
        const data = await res.json();
        console.log(data);
        getRandomEmoji(data)
        
      } catch (error) {
        console.log(error);
      }
    }
getEmoji()


const render = (arr) =>{
    const html = arr.map((item)=> {
        return `<div>${item.name} ${item.email}</div>`
    }).join('')
    document.getElementById("container").innerHTML = html
}
