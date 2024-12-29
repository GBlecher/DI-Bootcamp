import  { useState} from 'react';
import quotes from '../quotes'; 

const QuoteDisplay = () => {
    const [currentQuote, setCurrentQuote] = useState({});
    const [usedQuotes, setUsedQuotes] = useState([]);

    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const getNewQuote = () => {
        let randomIndex;
        
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (usedQuotes.includes(randomIndex));

        const newQuote = quotes[randomIndex];
        setCurrentQuote(newQuote);
        setUsedQuotes([...usedQuotes, randomIndex]); 

        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor
        document.getElementById('quote').style.color = randomColor
        document.getElementById('quote-button').style.backgroundColor = randomColor

        
        if (usedQuotes.length === quotes.length) {
            setUsedQuotes([]); 
        }
    };

  

    return (
        <div style={{ 
            textAlign: 'center', 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '15px', 
            width: '650px', 
            margin: '0 auto', 
            wordWrap: 'break-word' 
        }}>
            <h1 id="quote">{currentQuote.quote}</h1>
            <h3>{currentQuote.author}</h3>
            <button id="quote-button" onClick={getNewQuote}>New Quote</button>
        </div>
    );
};

export default QuoteDisplay;