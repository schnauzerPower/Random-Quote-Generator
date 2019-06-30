        //variable used for setInterval() function
        var interval;

        //prints president information and gets random background color on page load
        print(getRandomQuote());
        getRandomBackgroundColor();

        //Functions

        //selects president from quoteDataBase and provides all information
        function print(president) {
            document.getElementById('quote').innerHTML = "\"" + quotes[president].quote + "\"";
            document.getElementById('grid-item1').src = quotes[president].picture;
            document.getElementById('grid-item2').innerHTML = "-" + quotes[president].source;
            document.getElementById('grid-item3').innerHTML = quotes[president].rank;
            document.getElementById('grid-item4').innerHTML = quotes[president].years;
            
        }
        
        
        
        //Gets new president and background color every thirty seconds
        var timer = function() {
            interval =  setInterval(function() {
                 $('h3').fadeOut(1, function() {document.getElementById("newQuoteButton").disabled = true;});
                $('img').fadeOut(1);
                $('p').fadeOut(1);
                getRandomBackgroundColor();
                print(getRandomQuote());
                $('h3').fadeIn(1000);
                $('img').fadeIn(1000, function() {document.getElementById("newQuoteButton").disabled = false;});
                $('p').fadeIn(1000);
            }, 5000);
        }
        
       timer();


        //gets new president information
        function getRandomQuote() {
            var president = Math.floor(Math.random() * 45);
            return president;
        }

        
        //Chooses a random background color. Text is white so it pulls only darker colors (0-128).
        function getRandomBackgroundColor() {
            var red = Math.floor(Math.random() * 128);
            var green = Math.floor(Math.random() * 128);
            var blue = Math.floor(Math.random() * 128);
            var backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            document.body.style.background = backgroundColor;
        }

        //Gets new president info on button click
        document.getElementById('newQuoteButton').onclick = function() {
            $('h3').fadeOut(1, function() {document.getElementById("newQuoteButton").disabled = true;});
            $('img').fadeOut(1);
            $('p').fadeOut(1);
            getRandomBackgroundColor(); //Citation: https://stackoverflow.com/questions/2881307/can-i-have-two-javascript-onclick-events-in-one-element, Jacob Relkin
            print(getRandomQuote());
            $('h3').fadeIn(1000);
            $('img').fadeIn(3000, function() {document.getElementById("newQuoteButton").disabled = false;});
            $('p').fadeIn(1000);
            
            clearInterval(interval); //Citation on resetting setInterval() timer: Bhojendra Rauniyar at https://stackoverflow.com/questions/27037619/jquery-reset-setinterval-time 
            timer();
    
            
        };

