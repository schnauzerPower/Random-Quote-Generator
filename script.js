/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Set variable for setInterval timer
var interval;
//Create array of quotes
var quotes = [
    {
        quote: "I am the master and the ruler of the world",
        source: "Psycho Sid Vicious"
    },
    {
        quote: "This right here is the future of wrestling. You can call this the New World Order of wrestling brother.",
        source: "Hulk Hogan",
        citation: "Bash at the Beach",
        year: "1996",
        video: "https://youtu.be/3hILCw66sLU"
    },
    {
        quote: "I am the best there is, the best there was, and the best there ever will be",
        source: "Bret Hart"
    },
    {
        quote: "Even though we call ourselves sports entertainment because of the athleticism involved, the key word in that phrase is entertainment.",
        source: "Vince McMahon",
        citation: "Raw",
        year: "1998",
        video: "https://youtu.be/PjBeCwz2fXg"
    },
    {
        quote: "Do you smell what the Rock is cooking?",
        source: "The Rock"
    },
    {
         quote: "And that's the bottom line because Stone Cold said so",
         source: "Stone Cold Steve Austin"
    }     
];

//random quote function that returns a quote object
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

//Function the pulls a random background color. Since the text is white, it selects darker colors only.
function getRandomBackgroundColor() {
            var red = Math.floor(Math.random() * 128);
            var green = Math.floor(Math.random() * 128);
            var blue = Math.floor(Math.random() * 128);
            var backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            document.body.style.background = backgroundColor;
}

//Sets a timer so the quote will change every ten seconds if the button is not pressed
var timer = function() {
                interval =  setInterval(function() {
                     $('p').fadeOut(1, function() {document.getElementById("loadQuote").disabled = true;});  //prevent event queue from getting backed up by rapid clicking
                    getRandomBackgroundColor();
                    printQuote();
                    $('p').fadeIn(1000, function() {document.getElementById("loadQuote").disabled = false;});
                }, 10000);
            }
        
timer();

//quote will be printed from this function when button is pressed. Pressing the button also resets the timer.
function printQuote() {
    getRandomBackgroundColor();
    var randomQuote = getRandomQuote();
    var html = "";
    html += '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source;
    //Check to see if object has citation property or not
    if(!randomQuote.hasOwnProperty('citation')) {
        html += '</p>'
    }
    else {
        html += '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span><span class="video">(<a href="' + randomQuote.video +'">watch</a>)</span></p>';
    }
    
    var output = document.getElementById('quote-box');
    output.innerHTML = html;
    
    $('p').fadeOut(1, function() {document.getElementById("loadQuote").disabled = true;});  //disable button until new info has faded in completely to avoid backing up the queue on rapid clicks
    $('p').fadeIn(1000, function() {document.getElementById("loadQuote").disabled = false;});
    
    //Reset setInterval timer and then start it again - Bhojendra Rauniyar at https://stackoverflow.com/questions/27037619/jquery-reset-setinterval-time
    clearInterval(interval);
    timer();   
}

printQuote();

//printQuote function is called on button click
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
