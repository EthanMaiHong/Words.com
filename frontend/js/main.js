var texts = ["I have had my invitation to this world's festival, and thus my life has been blessed.", 
"Be yourself; everyone else is already taken.", 
"The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.", 
"How can you move forward when you keep regretting the past?", 
"I’m not stupid. I’m just too lazy to show how smart I am.", 
"Knowing what it feels to be in pain, is exactly why we try to be kind to others.", 
"Life isn't about finding yourself. Life is about creating yourself.", 
"Logic will get you from A to Z; imagination will get you everywhere.", 
"One good thing about music, when it hits you, you feel no pain.", 
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"Coffee or tea, that is the question.",
"Violence creates many problems, extreme violence solves all problems.",
"Life is long enought; greed is never stuffed.",
"I'll let you be in my dreams if I can be in yours",
"The more I live, the more I learn. The more I learn, the more I realize, the less I know.",
"You've got to accentuate the positive<br>Eliminate the negative<br>Latch on to the affirmative<br>Don't mess with Mister In-Between",
"It go, right foot up, left foot slide<br>Left foot up, right foot slide"
];
var authors = ["Rabindranath Tagore", 
"Oscar Wilde", 
"Roy Mustang", 
"None", 
"Oreki Houtarou", 
"Jiraiya", 
"George Bernard Shaw", 
"Albert Einstein", 
"Bob Marley", 
"Winston S. Churchill",
"Internet",
"Internet",
"Internet",
"Bob Dylan",
"Michel Legrand",
"Johnny Mercer",
"Drake"
];
var from = ["None", 
"None", 
"Full Metal Alchemist", 
"Full Metal Alchemist", 
"Hyouka", 
"Naruto", 
"None", 
"None", 
"None", 
"None",
"None", 
"None",
"None",
"Talking World War III Blues",
"None",
"Ac-Cent-Tchu-Ate the Positive",
"Toosie Slide"
];

changeWords()
var x = setInterval(function() {
    var source = "—— ";
    var id = 0;
    var min = Math.ceil(0);
    var max = Math.floor(16);
    id = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("Words").innerHTML = texts[id];
    
    if (authors[id] != "None"){
        source += authors[id] + " ";
    }
    if (from[id] != "None"){
        source += "『" + from[id] + "』"
    }

    document.getElementById("Author").innerHTML = source;
    document.getElementById("Author").style.fontWeight = "bold";
}, 10000);

function changeWords() {
        var source = "—— ";
        var id = 0;
        var min = Math.ceil(0);
        var max = Math.floor(9);
        id = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("Words").innerHTML = texts[id];
        
        if (authors[id] != "None"){
            source += authors[id] + " ";
        }
        if (from[id] != "None"){
            source += "『" + from[id] + "』"
        }
    
        document.getElementById("Author").innerHTML = source;
        document.getElementById("Author").style.fontWeight = "bold";
    }