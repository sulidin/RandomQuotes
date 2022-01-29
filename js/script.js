/******************************************
*****************************************/
//Furkan BOZOKLUOGLU - 300335207

/*** 
 * `quotes` array 
***/
let quotes = [
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: "2016"

    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source: "Nelson Mandela",

    },
    {
        quote: "The way to get started is to quit talking and begin doing",
        source: "Walt Disney",

    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        source: "Steve Jobs",
        citation: "Google",
        year: "1996"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor",
        source: "Eleanor Roosevelt",
        citation: "Google",
        year: "1982"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
        source: "Oprah Winfrey",
        citation: "Google",

    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        source: "John Lennon",
        citation: "Twitter",
    }

]


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    // 1. Create a variable that generates a random number
    var randomNumber = Math.floor(Math.random() * quotes.length);
    // 2. Use the random number variable and bracket notation
    var quoteObject = quotes[randomNumber];
    // 3. Return the variable storing the random quote object
    return quoteObject;
}

//create a variable to store previous quote
let previousQuote = getRandomQuote();;

/***
 * `printQuote` function
***/
function printQuote() {

    let randomQuote = getRandomQuote();

    //Check if previous quote equal to current quote, while its same then we can get  new random quote
    while (previousQuote == randomQuote) {
        randomQuote = getRandomQuote();
    }
    //update previous quote for next click
    previousQuote = randomQuote;

    //create a variable to store inner html string 
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;
    //if citation is not undefined add it to string
    if (randomQuote.citation !== undefined) {
        PtoHTML1 = PtoHTML1 + "<span class='citation'>" + randomQuote.citation + "</span>";
    }
    //if year is not undefined add it to string
    if (randomQuote.year !== undefined) {
        PtoHTML1 = PtoHTML1 + "<span class='year'>" + randomQuote.year + "</span>";
    }
    //add closing p tag to source to finalize our innerHTML string
    PtoHTML1 = PtoHTML1 + "</p>"

    //print string variable as innerHTML 
    document.getElementById('quote-box').innerHTML = PtoHTML1;

}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);