 
const charName = document.getElementById('name')
const height = document.getElementById('height')
const gender = document.getElementById('gender')
const birthYr = document.getElementById('birth_yr')
const homeWorld = document.getElementById('home_world')
const RandBtn = document.getElementById('button')

async function FetchCharInfo()
{
    loadingScreen()

    let randomNum = Math.floor(Math.random() * 83) + 1
    let apiUrl = `https://www.swapi.tech/api/people/${randomNum}/`
    try{
        const response = await fetch(apiUrl)
        if(response.ok){
            let objData = await response.json()
            displayChar(objData.result.properties)
        }
            
        else{
            throw new Error(response.status)
        }
    }catch (error)
        {
            errorMesssage()
        }
}



function displayChar(character)
{
    charName.textContent = character.name
    height.textContent = `Height: ${character.height}`
    gender.textContent = `Gender: ${character.gender}`
    birthYr.textContent = `Birth Year: ${character.birth_year}`

    fetchHW(character.homeworld)
}


async function fetchHW(hwUrl) {
   
    try{
        const HWresponse = await fetch(hwUrl)
        if(HWresponse.ok){
            let homeWorldData = await HWresponse.json()
           homeWorld.textContent = `Home World: ${homeWorldData.result.properties.name}`
        }
        else{
            throw new Error(HWresponse.status)
        }
    }catch (error)
        {
            errorMesssage()
        }
}

RandBtn.addEventListener("click",FetchCharInfo)

function errorMesssage(){
    charName.innerText = 'Oh No! That person isnt available.';
    height.innerText = ''
    gender.innerText = ''
    birthYr.innerText = ''
    homeWorld.innerText = ''
}

function loadingScreen(){
    
    charName.innerHTML = ' <i class="fa-solid fa-cog fa-spin" style=";"></i><p>Loading...</p>';
    height.innerText = ''
    gender.innerText = ''
    birthYr.innerText = ''
    homeWorld.innerText = ''
  }
