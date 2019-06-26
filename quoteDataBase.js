var quotes = [
    {
        quote: "Associate yourself with men of good quality if you esteem your own reputation; for 'tis better to be alone than in bad company.",
        source: "George Washington",
        years: "1789-1797",
        picture: "https://upload.wikimedia.org/wikipedia/commons/b/b7/GeorgeWashington.jpg"
    },
    {
        quote: "To be good, and to do good, is all we have to do.",
        source: "John Adams",
        years: "1797-1801",
        picture: "https://upload.wikimedia.org/wikipedia/commons/2/25/US_Navy_031029-N-6236G-001_A_painting_of_President_John_Adams_%281735-1826%29%2C_2nd_president_of_the_United_States%2C_by_Asher_B._Durand_%281767-1845%29-crop.jpg"
    },
    {
        quote: "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
        source: "Thomas Jefferson",
        years: "1801-1809",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Thomas_Jefferson_by_Rembrandt_Peale_1805_cropped.jpg"
    },
    {
        quote: "It is by a thorough knowledge of the whole subject that [people] are enabled to judge correctly of the past and to give a proper direction to the future.",
        source: "James Monroe",
        years: "1789-1797",
        picture: "https://upload.wikimedia.org/wikipedia/commons/b/b7/GeorgeWashington.jpg"
    },
    {
        quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader",
        source: "John Quincy Adams",
        years: "1789-1797",
        picture: "https://upload.wikimedia.org/wikipedia/commons/b/b7/GeorgeWashington.jpg"
    },
    {
        quote: "It is easier to do a job right than to explain why you didn't.",
        source: "Martin Van Buren",
        years: "1789-1797",
        picture: "https://upload.wikimedia.org/wikipedia/commons/b/b7/GeorgeWashington.jpg"
    },
    {
        quote: "Times change, and we change with them.",
        source: "William Henry Harrison"
    },
    {
        quote: "I can never consent to being dictated to.",
        source: "John Tyler"
    },
    {
        quote: "The gratitude should be commensurate with the boundless blessings which we enjoy.",
        source: "James K. Polk"
    },
    {
        quote: "I have always done my duty. I am ready to die. My only regret is for the friends I leave behind me.",
        source: "Zachary Taylor"
    },
    {
        quote: "An honorable defeat is better than a dishonorable victory.",
        source: "Millard Fillmore"
    },
    {
        quote: "While men inhabiting different parts of this vast continent cannot be expected to hold the same opinions, they can unite in a common objective and sustain common principles.",
        source: "Franklin Pierce"
    },
    {
        quote: "The test of leadership is not to put greatness into humanity, but to elicit it, for the greatness is already there.",
        source: "James Buchanan"
    },
    {
        quote: "I don’t like that man. I must get to know him better.",
        source: "Abraham Lincoln"
    },
    {
        quote: "If you always support the correct principles then you will never get the wrong results!",
        source: "Andrew Johnson"
    },
    {
        quote: "In every battle there comes a time when both sides consider themselves beaten, then he who continues the attack wins.",
        source: "Ulysses S. Grant"
    },
    {
        quote: "Every expert was once a beginner.",
        source: "Rutherford B. Hayes"
    },
    {
        quote: "Right reason is stronger than force.",
        source: "James Garfield"
    },
    {
        quote: "Be fit for more than the thing you are now doing. Let everyone know that you have a reserve in yourself; that you have more power than you are now using. If you are not too large for the place you occupy, you are too small for it.",
        source: "Chester Arthur"
    },
    {
        quote: "It is better to be defeated standing for a high principle than to run by committing subterfuge.",
        source: "Grover Cleveland"
    },
    {
        quote: "Great lives never go out; they go on.",
        source: "Benjamin Harrison"
    },
    {
        quote: "Unswerving loyalty to duty, constant devotion to truth, and a clear conscience will overcome every discouragement and surely lead the way to usefulness and high achievement.",
        source: "Grover Cleveland"
    },
    {
        quote: "In the time of darkest defeat, victory may be nearest.",
        source: "William McKinley"
    },
    {
        quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn’t sit for a month.",
        source: "Theordore Roosevelt"
    },
    {
        quote: "We must dare to be great; and we must realize that greatness is the fruit of toil and sacrifice and high courage.",
        source: "William Howard Taft"
    },
    {
        quote: "The object of love is to serve, not to win.",
        source: "Woodrow Wilson"
    },
    {
        quote: "There's good in everybody. Boost. Don't knock.",
        source: "Warren G. Harding"
    },
    {
        quote: "If you see ten troubles coming down the road, you can be sure that nine will run into the ditch before they reach you.",
        source: "Calvin Coolidge"
    },
    {
        quote: "Be patient and calm; no one can catch a fish with anger.",
        source: "Herbert Hoover"
    },
    {
        quote: "Men are not prisoners of fate, but only prisoners of their own minds.",
        source: "Franklin D. Roosevelt"
    },
    {
        quote: "It is amazing what you can accomplish if you do not care who gets the credit.",
        source: "Harry S. Truman"
    },
    {
        quote: "Pessimism never won any battle.",
        source: "Dwight Eisenhower"
    },
    {
        quote: "Efforts and courage are not enough without purpose and direction.",
        source: "John F. Kennedy"
    },
    {
        quote: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
        source: "Lyndon B. Johnson"
    },
    {
        quote: "Remember, always give your best. Never get discouraged. Never be petty. Always remember, others may hate you. But those who hate you don't win unless you hate them. And then you destroy yourself.”",
        source: "Richard M. Nixon"
    },
    {
        quote: "Never be satisfied with less than your very best effort. If you strive for the top and miss, you'll still 'beat the pack.",
        source: "Gerald R. Ford"
    },
    {
        quote: "You can do what you have to do, and sometimes you can do it even better than you think you can.",
        source: "Jimmy Carter"
    },
    {
        quote: "Heroes may not be braver than anyone else. They’re just braver five minutes longer.",
        source: "Ronald Reagan"
    },
    {
        quote: "No problem of human making is too great to be overcome by human ingenuity, human energy, and the untiring hope of the human spirit.",
        source: "George H.W. Bush"
    },
    {
        quote: "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit.",
        source: "Bill Clinton"
    },
    {
        quote: "A leader is someone who brings people together.",
        source: "George W. Bush"
    },
    {
        quote: "Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
        source: "Barak Obama"
    },
    {
        quote: "Without passion you don't have energy, without energy you have nothing.",
        source: "Donald Trump"
    }
]