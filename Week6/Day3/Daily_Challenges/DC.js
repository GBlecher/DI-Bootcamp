const apiKey ="5e1264ac02a4b5e801fbd5f4"
let conversionRates = {}
let baseCurrency = "USD"; 
let selectedToCurrency;
 
const fromCurrency = document.getElementById("from_currency")
const toCurrency = document.getElementById("to_currency")
const amount = document.getElementById("amount")
const convertBtn = document.getElementById("convert_btn")
const output = document.getElementById("output")


async function FetchAPi(baseCurrency)
{
    let apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`
    try{
        const response = await fetch(apiUrl)
        if(response.ok){
            let objData = await response.json()
            console.log(objData)
            conversionRates=objData.conversion_rates
            addDropdown(conversionRates)
        }
            
        else{
            throw new Error(response.status)
        }
    }catch (error)
        {
            console.error(error)
        }
}


function convertCurrency(amount, to){
    let convoRate = conversionRates[to]
    return amount * convoRate

}


fromCurrency.addEventListener('change',(event)=> {
     baseCurrency = event.target.value
    FetchAPi(baseCurrency)
})

toCurrency.addEventListener('change',(event)=> {
     selectedToCurrency = event.target.value
})

convertBtn.addEventListener("click", ()=>{
    convertedAmount = convertCurrency(amount.value,selectedToCurrency)
    output.textContent = `${selectedToCurrency} ${convertedAmount}`
})


function addDropdown(conversionRates){
    toCurrency.innerHTML = '' 
    fromCurrency.innerHTML = '' 
    currencies = Object.keys(conversionRates)
    
    for(currency of currencies)
    {
        fromOption = document.createElement("option")
        fromOption.value = currency
        fromOption.textContent = currency
        

        toOption = document.createElement("option")
        toOption.value = currency
        toOption.textContent = currency
        
        toCurrency.appendChild(toOption)
        fromCurrency.appendChild(fromOption)

    }

}

FetchAPi(baseCurrency)