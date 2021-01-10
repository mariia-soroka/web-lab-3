document.querySelector('.fetch-quote').addEventListener('click', fetchJson);


async function fetchJson() {
    const response = await fetch('quote.json');
    const data = await response.json();
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    
    document.querySelector('.quote').innerText = randomQuote.quoteText;  
    document.querySelector('.author').innerText = randomQuote.quoteAuthor;
    console.log(randomQuote);

}