// create an array of quotes
var myQuotes = [
    "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it (Ferris Bueller's Day Off)",
    "The world is not in your books and maps, it's out there. (The Hobbit: An Unexpected Journey)",
    "Your heart is free, have the courage to follow it (Braveheart)",
    "A life lived in fear is a life half lived (Strictly Ballroom)"
];
// function to iterate through quotes, displaying one at a time 

function changeQuotes() {
    var timer = 0;
    for (let i = 0; i < myQuotes.length; i++) {
        setTimeout(() => document.getElementById("quotes-box").innerHTML = myQuotes[i], timer);
        timer = timer + 3000
    }
}
//function call
changeQuotes();