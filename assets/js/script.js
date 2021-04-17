// create an array of quotes
var myQuotes = [
    `"Life moves pretty fast. If you don't stop and look around once in a while, you could miss it" <br> <span>- Ferris Bueller's Day Off</span>`,
    `"The world is not in your books and maps, it's out there." <br> <span>- The Hobbit: An Unexpected Journey</span>`,
    `"Your heart is free, have the courage to follow it" <br> <span>- Braveheart</span>`,
    `"A life lived in fear is a life half lived" <br> <span>- Strictly Ballroom</span>`,
    `"The future is not set. There is no fate but what we make for ourselves" <br> <span>- Terminator 2: Judgement Day</span>`,
    `"It does not do to dwell on dreams and forget to live" <br> <span>- Harry Potter</span>`,
    `"Some journeys take us far from home. Some adventures lead us to our destiny." <br> <span>- The Chronicles of Narnia</span>`,
    `"It's a dangerous business Frodo, going our your door. You step onto the road and if you don't keep your feet, 
    there's no knowing where you might be swept off to" <br> <span>- Lord of the Rings</span>`,
    `"I want adventure in the great wide somewhere" <br> <span>- Beauty and the Beast</span>`,
    `"Fifty years from now, when you're looking back at your life, don't you want to be able to say you had the guts to get in the car?" 
    <br> <span>- Transformers</span>`,
    `"To live would be an awfully big adventure" <br> <span>- Peter Pan</span>`
];
// function to iterate through quotes, displaying one at a time 



function changeQuotes() {
    var timer = 0;
    for (let i = 0; i < myQuotes.length; i++) {
        setTimeout(() => document.getElementById("quotes-box").innerHTML = myQuotes[i], timer);
        timer = timer + 5000
    }
}
//function call
changeQuotes();