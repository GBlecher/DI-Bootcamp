formElem = document.getElementById("form")
formElem.addEventListener('submit', function(event) 
{
    event.preventDefault();

    let firstNameValue = document.getElementById("fName").value
    let lastNameValue = document.getElementById("lName").value

    const jsonName = JSON.stringify({name: firstNameValue, lastname:lastNameValue})

    console.log(jsonName)
})


