let string1 = prompt("Enter first string").toLowerCase()
    let string2 = prompt("Enter second string").toLowerCase()


function isAnagram(string1,string2) {
    
    const sortedstring1 = string1.split('').sort().join('').trim()
    const sortedstring2 = string2.split('').sort().join('').trim()

  
    if (sortedstring1 === sortedstring2) {
        return true
    }else
    {
        return false
    }

}

if (isAnagram(string1,string2)) {
    console.log(`"${string1}" is an anagram of "${string2}"`)
}else
{
    console.log(`"${string1}" is not an anagram of "${string2}"`)
}

