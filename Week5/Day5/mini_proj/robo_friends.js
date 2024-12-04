const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];
const cardContainer = document.getElementById("card_container")
const searchInput = document.getElementById("searchbar")


function displayRobots(robots) {
    robots.forEach((robot) => {
        // Create new card
        let cardElem = document.createElement("article")
        cardElem.classList.add('card')
        cardElem.width = 400;
        cardElem.height = 500


        // create and style new image 
        let imgElem = document.createElement("img")
        imgElem.src = robot.image
        imgElem.alt = `${robot.name}'s Profile img`
        cardElem.id = robot.id
        imgElem.style.borderRadius = "50%"
        cardElem.appendChild(imgElem)

        // create new text 
        let nameElem = document.createElement("h2")
        nameElem.textContent = robot.name
        let emailElem = document.createElement("p")
        emailElem.textContent = robot.email


        // append to card container
        cardElem.appendChild(nameElem)
        cardElem.appendChild(emailElem)
        cardContainer.appendChild(cardElem)
    })
}
displayRobots(robots);


// search for results
searchInput.addEventListener("input", function () {
    let searchText = searchInput.value.toLocaleLowerCase()
    if (searchText === "") {
        cardContainer.innerHTML = ''
        displayRobots(robots);
    }
    else {
        cardContainer.innerHTML = ''
        filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchText))
        if (filteredRobots.length === 0) {
            cardContainer.innerHTML = "NO MATCHES FOUND"
        } else {
            displayRobots(filteredRobots)
        }


    }



})