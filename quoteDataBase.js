//Images here were selected from Wikipedia Commons and labeled as free to reuse or share
var quotes = [
    {
        quote: "Associate yourself with men of good quality if you esteem your own reputation; for 'tis better to be alone than in bad company.",
        source: "George Washington",
        years: "1789-1797",
        picture: "https://upload.wikimedia.org/wikipedia/commons/b/b7/GeorgeWashington.jpg",
        rank: "1st president"
    },
    {
        quote: "To be good, and to do good, is all we have to do.",
        source: "John Adams",
        years: "1797-1801",
        picture: "https://upload.wikimedia.org/wikipedia/commons/2/25/US_Navy_031029-N-6236G-001_A_painting_of_President_John_Adams_%281735-1826%29%2C_2nd_president_of_the_United_States%2C_by_Asher_B._Durand_%281767-1845%29-crop.jpg",
        rank: "2nd president"
    },
    {
        quote: "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
        source: "Thomas Jefferson",
        years: "1801-1809",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Thomas_Jefferson_by_Rembrandt_Peale_1805_cropped.jpg",
        rank: "3rd president"
    },
    {
        quote: "The circulation of confidence is better than the circulation of money.",
        source: "James Madison",
        years: "1809-1817",
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Hh_1789_05_04_madison_james_hc%281%29.jpg",
        rank: "4th president"
    },
    {
        quote: "It is by a thorough knowledge of the whole subject that [people] are enabled to judge correctly of the past and to give a proper direction to the future.",
        source: "James Monroe",
        years: "1817-1825",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/James_Monroe_02.jpg/716px-James_Monroe_02.jpg",
        rank: "5th president"
    },
    {
        quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader",
        source: "John Quincy Adams",
        years: "1825-1829",
        picture: "https://upload.wikimedia.org/wikipedia/commons/8/8b/John_Quincy_Adams_by_George_Caleb_Bingham%2C_c._1850_after_1844_original_-_DSC03234.JPG",
        rank: "6th president"
    },
    {
        quote: "“Any man worth his salt will stick up for what he believes right, but it takes a slightly better man to acknowledge instantly and without reservation that he is in error.",
        source: "Andrew Jackson",
        years: "1829-1837",
        picture: "https://upload.wikimedia.org/wikipedia/commons/7/77/Andrew_Jackson_A13734.jpg",
        rank: "7th president"
    },
    {
        quote: "It is easier to do a job right than to explain why you didn't.",
        source: "Martin Van Buren",
        years: "1837-1841",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Martin_Van_Buren_by_George_Peter_Alexander_Healy_%28detail%29%2C_1864_-_DSC03203.JPG",
        rank: "8th president"
    },
    {
        quote: "Times change, and we change with them.",
        source: "William Henry Harrison",
        years: "1841",
        picture: "https://upload.wikimedia.org/wikipedia/commons/b/b3/James_Reid_Lambdin_-_William_Henry_Harrison_-_Google_Art_Project.jpg",
        rank: "9th president"
    },
    {
        quote: "I can never consent to being dictated to.",
        source: "John Tyler",
        years: "1841-1845",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/John_Tyler.png/639px-John_Tyler.png",
        rank: "10th president"
    },
    {
        quote: "The gratitude should be commensurate with the boundless blessings which we enjoy.",
        source: "James K. Polk",
        years: "1845-1849",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/James_K._Polk_portrait.png/659px-James_K._Polk_portrait.png",
        rank: "11th president"
    },
    {
        quote: "I have always done my duty. I am ready to die. My only regret is for the friends I leave behind me.",
        source: "Zachary Taylor",
        years: "1849-1850",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/30/Zachary_Taylor_half_plate_daguerreotype_c1843-45-crop.png",
        rank: "12th president"
    },
    {
        quote: "An honorable defeat is better than a dishonorable victory.",
        source: "Millard Fillmore",
        years: "1850-1853",
        picture: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Millard_Fillmore_by_Whitehurst_Gallery_c1850s.jpg",
        rank: "13th president"
    },
    {
        quote: "While men inhabiting different parts of this vast continent cannot be expected to hold the same opinions, they can unite in a common objective and sustain common principles.",
        source: "Franklin Pierce",
        years: "1853-1857",
        picture: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Franklin_Pierce_-_1.jpg",
        rank: "14th president"
    },
    {
        quote: "The test of leadership is not to put greatness into humanity, but to elicit it, for the greatness is already there.",
        source: "James Buchanan",
        years: "1857-1861",
        picture: "https://upload.wikimedia.org/wikipedia/commons/2/2c/James_Buchanan_-_post_presidency.jpg",
        rank: "15th president"
    },
    {
        quote: "I don’t like that man. I must get to know him better.",
        source: "Abraham Lincoln",
        years: "1861-1865",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Abraham_Lincoln_head_on_shoulders_photo_portrait.jpg/684px-Abraham_Lincoln_head_on_shoulders_photo_portrait.jpg",
        rank: "16th president"
    },
    {
        quote: "If you always support the correct principles then you will never get the wrong results!",
        source: "Andrew Johnson",
        years: "1865-1869",
        picture: "https://upload.wikimedia.org/wikipedia/commons/c/ce/President_Andrew_Johnson.jpg",
        rank: "17th president"
    },
    {
        quote: "In every battle there comes a time when both sides consider themselves beaten, then he who continues the attack wins.",
        source: "Ulysses S. Grant",
        years: "1869-1877",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Ulysses_S._Grant_1870-1880.jpg",
        rank: "18th president"
    },
    {
        quote: "Every expert was once a beginner.",
        source: "Rutherford B. Hayes",
        years: "1877-1881",
        picture: "https://www.goodfreephotos.com/cache/people/Rutherford-B-Hayes-portrait.jpg",
        rank: "19th president"
    },
    {
        quote: "Right reason is stronger than force.",
        source: "James Garfield",
        years: "1881",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg",
        rank: "20th president"
    },
    {
        quote: "Be fit for more than the thing you are now doing. Let everyone know that you have a reserve in yourself; that you have more power than you are now using. If you are not too large for the place you occupy, you are too small for it.",
        source: "Chester Arthur",
        years: "1881-1885",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Chester_Alan_Arthur.jpg/776px-Chester_Alan_Arthur.jpg",
        rank: "21st president"
    },
    {
        quote: "It is better to be defeated standing for a high principle than to run by committing subterfuge.",
        source: "Grover Cleveland",
        years: "1885-1889 & 1893-1897",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/35/1882%2C_Sarony%2C_Napoleon%2C_%28Stephen%29_Grover_Cleveland.jpg",
        rank: "22nd and 24th president"
    },
    {
        quote: "Great lives never go out; they go on.",
        source: "Benjamin Harrison",
        years: "1889-1893",
        picture: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg",
        rank: "23rd president"
    },
    {
        quote: "Unswerving loyalty to duty, constant devotion to truth, and a clear conscience will overcome every discouragement and surely lead the way to usefulness and high achievement.",
        source: "Grover Cleveland",
        years: "1885-1889 & 1893-1897",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/35/1882%2C_Sarony%2C_Napoleon%2C_%28Stephen%29_Grover_Cleveland.jpg",
        rank: "22nd and 24th president"
    },
    {
        quote: "In the time of darkest defeat, victory may be nearest.",
        source: "William McKinley",
        years: "1897-1901",
        picture: "https://upload.wikimedia.org/wikipedia/commons/2/2e/William_McKinley-head%26shoulders.jpg",
        rank: "25th president"
    },
    {
        quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn’t sit for a month.",
        source: "Theordore Roosevelt",
        years: "1901-1909",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1c/President_Roosevelt_-_Pach_Bros.jpg",
        rank: "26th president"
    },
    {
        quote: "We must dare to be great; and we must realize that greatness is the fruit of toil and sacrifice and high courage.",
        source: "William Howard Taft",
        years: "1909-1913",
        picture: "https://upload.wikimedia.org/wikipedia/commons/9/9b/William_Howard_Taft_1909.jpg",
        rank: "27th president"
    },
    {
        quote: "The object of love is to serve, not to win.",
        source: "Woodrow Wilson",
        years: "1913-1921",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/37/President_Woodrow_Wilson.jpg",
        rank: "28th president"
    },
    {
        quote: "There's good in everybody. Boost. Don't knock.",
        source: "Warren G. Harding",
        years: "1921-1923",
        picture: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Warren_G._Harding.jpg",
        rank: "29th president"
    },
    {
        quote: "If you see ten troubles coming down the road, you can be sure that nine will run into the ditch before they reach you.",
        source: "Calvin Coolidge",
        years: "1923-1929",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/48/John_Calvin_Coolidge%2C_Bain_bw_photo_portrait.jpg",
        rank: "30th president"
    },
    {
        quote: "Be patient and calm; no one can catch a fish with anger.",
        source: "Herbert Hoover",
        years: "1929-1933",
        picture: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Herbert_Hoover_-_NARA_-_532049.jpg",
        rank: "31st president"
    },
    {
        quote: "Men are not prisoners of fate, but only prisoners of their own minds.",
        source: "Franklin D. Roosevelt",
        years: "1933-1945",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg",
        rank: "32nd president"
    },
    {
        quote: "It is amazing what you can accomplish if you do not care who gets the credit.",
        source: "Harry S. Truman",
        years: "1945-1953",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Harry_S_Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945.jpg/723px-Harry_S_Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945.jpg",
        rank: "33rd president"
    },
    {
        quote: "Pessimism never won any battle.",
        source: "Dwight Eisenhower",
        years: "1953-1961",
        picture: "https://upload.wikimedia.org/wikipedia/commons/9/90/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959_%28cropped%29.jpg",
        rank: "34th president"
    },
    {
        quote: "Efforts and courage are not enough without purpose and direction.",
        source: "John F. Kennedy",
        years: "1961-1963",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/462px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
        rank: "35th president"
    },
    {
        quote: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
        source: "Lyndon B. Johnson",
        years: "1963-1969",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Lyndon_B._Johnson_Oval_Office_Portrait_%28cropped%29.png",
        rank: "36th president"
    },
    {
        quote: "Remember, always give your best. Never get discouraged. Never be petty. Always remember, others may hate you. But those who hate you don't win unless you hate them. And then you destroy yourself.”",
        source: "Richard M. Nixon",
        years: "1969-1974",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/39/Richard_M._Nixon%2C_ca._1935_-_1982_-_NARA_-_530679.jpg",
        rank: "37th president"
    },
    {
        quote: "Never be satisfied with less than your very best effort. If you strive for the top and miss, you'll still 'beat the pack.",
        source: "Gerald R. Ford",
        years: "1974-1977",
        picture: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Gerald_Ford%2C_official_Presidential_photo.jpg",
        rank: "38th president"
    },
    {
        quote: "You can do what you have to do, and sometimes you can do it even better than you think you can.",
        source: "Jimmy Carter",
        years: "1977-1981",
        picture: "https://upload.wikimedia.org/wikipedia/commons/8/80/Jimmy_Carter_cropped.jpg",
        rank: "39th president"
    },
    {
        quote: "Heroes may not be braver than anyone else. They’re just braver five minutes longer.",
        source: "Ronald Reagan",
        years: "1981-1989",
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/df/Official_Portrait_of_President_Reagan_1981-cropped.jpg",
        rank: "40th president"
    },
    {
        quote: "No problem of human making is too great to be overcome by human ingenuity, human energy, and the untiring hope of the human spirit.",
        source: "George H.W. Bush",
        years: "1989-1993",
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/d9/George_HW_Bush.jpg",
        rank: "41st president"
    },
    {
        quote: "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit.",
        source: "Bill Clinton",
        years: "1993-2001",
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg",
        rank: "42nd president"
    },
    {
        quote: "A leader is someone who brings people together.",
        source: "George W. Bush",
        years: "2001-2009",
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg",
        rank: "43rd president"
    },
    {
        quote: "Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
        source: "Barak Obama",
        years: "2009-2017",
        picture: "https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg",
        rank: "44th president"
    },
    {
        quote: "Without passion you don't have energy, without energy you have nothing.",
        source: "Donald Trump",
        years: "2017-",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
        rank: "45th president"
    }
]