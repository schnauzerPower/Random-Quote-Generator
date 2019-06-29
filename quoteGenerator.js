var colors = ["blue", "green", "gray", "brown", "purple", "red", "black", "darkgreen"];
        var interval;

        function print(president) {
            document.getElementById('quote').innerHTML = "\"" + quotes[president].quote + "\"";
            document.getElementById('grid-item1').src = quotes[president].picture;
            document.getElementById('grid-item2').innerHTML = "-" + quotes[president].source;
            document.getElementById('grid-item3').innerHTML = quotes[president].rank;
            document.getElementById('grid-item4').innerHTML = quotes[president].years;
            
        }
        
        print(getRandomQuote());
        getRandomBackgroundColor();
        
        
        var timer = function() {
            interval =  setInterval(function() {
                 $('h3').fadeOut(1, function() {document.getElementById("newQuoteButton").disabled = true;});
                $('img').fadeOut(1);
                $('p').fadeOut(1);
                getRandomBackgroundColor();
                print(getRandomQuote());
                $('h3').fadeIn(1000, function() {document.getElementById("newQuoteButton").disabled = false;});
                $('img').fadeIn(1000);
                $('p').fadeIn(1000);
            }, 30000);
        }
        
       timer();

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
            $('h3').fadeOut(1, function() {document.getElementById("newQuoteButton").disabled = true;});
            $('img').fadeOut(1);
            $('p').fadeOut(1);
            getRandomBackgroundColor();
            print(getRandomQuote());
            $('h3').fadeIn(1000, function() {document.getElementById("newQuoteButton").disabled = false;});
            $('img').fadeIn(1000);
            $('p').fadeIn(1000);
            
            clearInterval(interval); //I did some research on how to reset the setInterval() timer and found this code by Bhojendra Rauniyar at https://stackoverflow.com/questions/27037619/jquery-reset-setinterval-time 
            timer();
    
            
        };

