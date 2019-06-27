var colors = ["blue", "green", "gray", "brown", "purple", "red", "black", "darkgreen"];

function print(president) {
    var html = "<h3>" + "\"" + quotes[president].quote + "\"</h3>";
    html += "<p>- " + quotes[president].source + "</p>";
    html += "<p>" + quotes[president].years + "</p>";
    var output = document.getElementById('output');
    output.innerHTML = html;
}
print(getRandomQuote());


function getRandomQuote() {
    var president = Math.floor(Math.random() * 45);
    return president;
}

function getRandomBackgroundColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    var backgroundColor = colors[randomColor];
    document.body.style.background = backgroundColor;
}

//https://stackoverflow.com/questions/2881307/can-i-have-two-javascript-onclick-events-in-one-element, Jacob Relkin  
document.getElementById('newQuoteButton').onclick = function() {
    getRandomBackgroundColor();
    print(getRandomQuote());
};


getRandomBackgroundColor();

