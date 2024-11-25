// Daily challenge: Not Bad

sentence = "The movie is not that bad, I like it"
Arr = sentence.split(/[, ]+/)
console.log(Arr)

wordBad = Arr.indexOf("bad")
wordNot = Arr.indexOf("not")

if (wordNot < wordBad)
{
    Arr.splice(wordNot,wordBad-wordNot + 1,"good,")
    newSentence =Arr.join(" ")
    console.log(newSentence)
}else
{
    console.log(sentence)
}

