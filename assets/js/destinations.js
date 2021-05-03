/* jshint esversion: 6 */
/* globals $:false */

// Jquery in use throughout

// function to display the relevant div on clicking from the main country menu
$(document).ready(function () {
    $("#arrow-iceland").click(function () {
        $("#display-country-details-iceland").show();
        $("#display-country-details-malta").hide();
        $("#display-country-details-newzealand").hide();
        $("#display-country-details-morocco").hide();
        $("#display-country-details-ireland").hide();

    });
    $("#arrow-malta").click(function () {
        $("#display-country-details-malta").show();
        $("#display-country-details-iceland").hide();
        $("#display-country-details-newzealand").hide();
        $("#display-country-details-morocco").hide();
        $("#display-country-details-ireland").hide();
    });
    $("#arrow-newzealand").click(function () {
        $("#display-country-details-newzealand").show();
        $("#display-country-details-iceland").hide();
        $("#display-country-details-malta").hide();
        $("#display-country-details-morocco").hide();
        $("#display-country-details-ireland").hide();
    });
    $("#arrow-morocco").click(function () {
        $("#display-country-details-morocco").show();
        $("#display-country-details-iceland").hide();
        $("#display-country-details-malta").hide();
        $("#display-country-details-newzealand").hide();
        $("#display-country-details-ireland").hide();

    });
    $("#arrow-ireland").click(function () {
        $("#display-country-details-ireland").show();
        $("#display-country-details-iceland").hide();
        $("#display-country-details-malta").hide();
        $("#display-country-details-newzealand").hide();
        $("#display-country-details-morocco").hide();

    });

});

// Following section refactored with mentor's guidance from my orginal code

// Create an object within each destination object to hold all the info
const destinations = {
    // Iceland destinations
    "Dettifoss": {
        title: "Dettifoss",
        imageSrc: "assets/images/dettifoss.jpg",
        imageAltText: "photo of Dettifoss waterfall",
        description: `Dettifoss (Falling Waterfall) is an amazing waterfall. No wonder Riddley Scott chose this
        spectacular scenery to be the background of the opening scene of his movie Prometheus (2012). 
        It is situated in the north eastern part of Iceland in Icelands biggest national park.`
    },
    "Mýrdalssandur beach": {
        title: "Mýrdalssandur beach",
        imageSrc: "assets/images/mýrdalssandurbeach.jpg",
        imageAltText: "photo of Mýrdalssandur beach",
        description: `The black sandy beaches that appear in scenes throughout Rogue One: A Star Wars story can be found in Mýrdalssandur. 
        The black sands are formed from lava. And despite the barren landscape, arctic foxes and seabirds can often be found here.`
    },
    "Reyðarfjörður": {
        title: "Reyðarfjörður",
        imageSrc: "assets/images/Reyðarfjörður.jpg",
        imageAltText: "photo of Reyðarfjörður",
        description: `The TV series Fortitude was mostly filmed in Reyðarfjörður in the East fjords of Iceland. 
        The town has outdoor activities that appeal to locals and visitors. A walk to the waterfall in Búðará is 
        recommended, as is the walk towards the town centre, along the 'Love Lane', and a hike to the sheltered area beneath the 
        shrub-covered slopes of Grænafell peak is a must.`
    },
    "Skógafoss": {
        title: "Skógafoss",
        imageSrc: "assets/images/skógafoss.jpg",
        imageAltText: "photo of Skógafoss waterfall",
        description: `The beautiful Skógafoss waterfall was one of the filming locations for Thor: The Dark World. The locations really gave 
        the film some wonderfully authentic visuals. One of Iceland's most splendid waterfalls, Skógafoss is a sight to behold.`
    },
    "Hverfjall mountain": {
        title: "Hverfjall mountain",
        imageSrc: "assets/images/hverfjallmountain.jpg",
        imageAltText: "photo of Hverfjall mountain",
        description: `As seen in the opening scenes of Star Trek Discovery season 3, Hverfjall is 396 meter (1,300 ft) high tephra explosion crater. It is located near the eastern shore of Lake Myvatn 
        in North Iceland. Resembling a black ash cone of mammoth proportions, you can walk up the steep slopes and around the 
        crater’s rim for otherworldly and awesome view of the surrounding landscape.`
    },
    // Malta destinations
    "Gozo": {
        title: "Gozo",
        imageSrc: "assets/images/malta-gozo.jpg",
        imageAltText: "photo of Gozo",
        description: `Malta and its two smaller satellite islands of Gozo and Comino have featured in various
        productions, arguably the most popular of which is Game of Thrones. Brad Pitt and Angelina Jolie filmed
        the ultimately prophetic break-up movie By the Sea on Gozo, the locations represented an idyllic version of
        1960's France.`
    },
    "Popeye village": {
        title: "Popeye village",
        imageSrc: "assets/images/malta-popeye.jpg",
        imageAltText: "photo of Popeye village",
        description: `Popeye Village was constructed for the sole purpose of serving as the location for 1980’s Popeye movie. 
        Soon after filming wrapped, it was abandoned, but the collection of wooden buildings sitting on the cliffs 
        of Anchor Bay found a new lease of life as a theme park.`
    },
    "Blue Lagoon": {
        title: "Blue Lagoon",
        imageSrc: "assets/images/malta-blue-lagoon.jpg",
        imageAltText: "photo of Blue Lagoon",
        description: `Malta’s smallest island, Comino, currently only has a population of three, yet thousands of people flock here
        for one reason: the Blue Lagoon. Its mesmerising fluorescent waters are famous around the world.
        The tiny island featured in several movies, including The Count of Monte Cristo (2002) and Swept Away (2002).`
    },
    "Valletta": {
        title: "Valletta",
        imageSrc: "assets/images/malta-valetta.jpg",
        imageAltText: "photo of Valletta",
        description: `Back in the capital – which ends up featuring in most of the movies already mentioned as well as a number 
        of others exclusively filmed here – Valletta‘s forts and walled sections make it perfect for period films as 
        well as fighting off zombies when it stood in for Jerusalem in World War Z (2013).`
    },
    "Mdina": {
        title: "Mdina",
        imageSrc: "assets/images/malta-mdina.jpg",
        imageAltText: "photo of Mdina",
        description: `Malta’s former capital, Mdina, known as the Silent City, is a medieval walled city with narrow streets, 
        centuries-old buildings and, at its heart, a cathedral that dominates the skyline. Mdina featured in Game of Thrones, 
        as did nearby Rabat, standing in for early depictions of King’s Landing. `
    },
    // New Zealand destinations
    "Lake Pukaki": {
        title: "Lake Pukaki",
        imageSrc: "assets/images/nz-lakepukaki.jpg",
        imageAltText: "photo of Lake Pukaki",
        description: `Lake Pukaki is a shimmering blue jewel set into a grand alpine playground - an iconic New
        Zealand landscape of high mountain peaks and glacier fed alpine lakes.
        Used for many major location scenes in The Lord of the Rings and The
        Hobbit Trilogies, particularly ‘Lake-town’ in The Hobbit: The Desolation of Smaug.`
    },
    "Hobbiton": {
        title: "Hobbiton",
        imageSrc: "assets/images/nz-hobbiton.jpg",
        imageAltText: "photo of Hobbiton",
        description: `The lush dairy farming landscape around the Waikato town of Matamata was used to portray the peaceful Shire 
        region of Middle‑earth™. The village of Hobbiton was created here with brilliant attention to detail.
        It was later rebuilt for the filming of The Hobbit Trilogy and is now a permanent attraction.`
    },
    "Cathedral Cove": {
        title: "Cathedral Cove",
        imageSrc: "assets/images/nz-cathedral-cove.jpg",
        imageAltText: "photo of Cathedral Cove",
        description: `The set for the ruins of the castle Cair Paravel, in the Chronicles of Narnia- Prince Caspian, was built 
        on the nearby Hereherataura Peninsula, overlooking iconic Cathedral Cove. From beautiful Hahei Beach on the 
        Coromandel Peninsula you can walk to Cathedral Cove.`
    },
    "Fiordland National Park": {
        title: "Fiordland National Park",
        imageSrc: "assets/images/nzfiordland.jpg",
        imageAltText: "photo of Fiordland National Park",
        description: `The breathtaking landscapes of Fiordland National Park were used by director Ridley Scott who shot “Alien Covenant” 
        around its most northern and accessible end. It offers some of the most jaw-dropping coastal scenery with magnificent 
        dark blue waters and dramatic peaks. The almost always present low-lying clouds made a perfect otherworldly backdrop.`
    },
    "Mount Taranaki": {
        title: "Mount Taranaki",
        imageSrc: "assets/images/nz-mount-taranaki.jpg",
        imageAltText: "photo of Mount Taranaki",
        description: `Most of the filming of The Last Samurai, starring Tom Cruise, took place near New Plymouth in Taranaki. 
        A Japanese village was constructed for filming on the hillsides of the Uruti Valley, with Mount Taranaki 
        standing in for ‘Mount Fuji‘.`
    },
    // Morocco destinations
    "Aït Benhaddou": {
        title: "Aït Benhaddou",
        imageSrc: "assets/images/mor-ait-benhaddou.jpg",
        imageAltText: "photo of Ait Benhaddou",
        description: `The glorious earth-built traditional Berber ksar of Ait Ben Haddou is a dream come true
        for photographers and film-makers. The towering sand-colored walls, narrow interior pathways and 
        staircases, traditional abodes, and panoramic vistas have featured in a number of movies, including 
        Gladiator, Lawrence of Arabia, and Jewel of the Nile. Fans of Game of Thrones may recognize the 
        glorious site as the fictitious Yellow City of Yunkai.`
    },
    "Tangier": {
        title: "Tangier",
        imageSrc: "assets/images/mor-tangier.jpg",
        imageAltText: "photo of Tangier",
        description: `The bustling Grand Souk in Morocco’s northern coastal city of Tangier was chosen as 
        the perfect place to film the exhilarating chase scene in Inception, with Tangier also 
        filling in for Kenya’s large city of Mombasa. Tangier also saw plenty of action during 
        the filming of The Bourne Ultimatum, and it has featured in several James Bond movies, 
        including From Russia with Love and The Living Daylights.`
    },
    "Erg Chebbi": {
        title: "Erg Chebbi",
        imageSrc: "assets/images/mor-erg-chebbi.jpg",
        imageAltText: "photo of Erg Chebbi",
        description: `The majestic and towering dunes of Erg Chebbi inspire awe in most that see them. 
        It is no surprise, therefore, that the site has been noticed by film producers. 
        In The Mummy Returns, the Moroccan desert was used for scenes that supposedly occurred 
        in the Egyptian desert.`
    },
    "Marrakesh": {
        title: "Marrakesh",
        imageSrc: "assets/images/mor-marrakech1.jpg",
        imageAltText: "photo of Marrakesh",
        description: `Avid film fans may be surprised to find out that a hotel, Amanjena, in Marrakech 
        was used as a stand-in for Abu Dhabi in Sex and the City 2.
        Places such as Mandarin Oriental, Mouassine and Jema El Fna Square (the latter where 
        they appear wandering around the bustling souk markets) are some of the star filming 
        locations of the movie.`
    },
    "Essaouira": {
        title: "Essaouira",
        imageSrc: "assets/images/mor-essaouira.jpg",
        imageAltText: "photo of Essaouira",
        description: `The popular coastal town of Essaouira was one of many global locations chosen to film Alexander, and it 
        was transformed for Kingdom of Heaven to represent ancient Jerusalem. If you love Game of Thrones you’ll 
        likely enjoy exploring Astapor; Essaouira was the setting for the fictitious area.`
    },
    // Ireland destinations
    "Skellig Michael": {
        title: "Skellig Michael",
        imageSrc: "assets/images/irl-skellig-michael.jpg",
        imageAltText: "photo of Skellig Micheal",
        description: `Star Wars is the movie that made Skellig Michael even more famous than it was. While
        looking for a spot to act as the planet of Ahch To which featured at the end of The Force Awakens,
        it was decided that Skellig Michael was to be the galaxy far, far away.
        Star Wars: The Last Jedi (2017) amped it up another level, with long scenes filmed not
        just on the Skelligs, but Malin Head in Co Donegal and on the Dingle Peninsula.`
    },
    "Powerscourt": {
        title: "Powerscourt",
        imageSrc: "assets/images/irl-powerscourt.jpg",
        imageAltText: "photo of Powerscourt Estate",
        description: `The Powerscourt Estate with its Georgian elegance, beautiful gardens, sweeping terraces, 
        cascading waterfall, lakes and hollows has been used in loads of movies and tv shows. If you love movies, 
        then Powerscourt is a must-visit destination. Over 25 movies or TV shows have filmed at Powerscourt House 
        and Gardens, including King Arthur, Excalibur, Mary Shelley, Love Rosie, the Count of Monte Cristo & The Tudors. `
    },
    "Cliffs of Moher": {
        title: "Cliffs of Moher",
        imageSrc: "assets/images/irl-cliffsofmoher.jpg",
        imageAltText: "photo of Cliffs of Moher",
        description: `Ireland's hero image? The Cliffs of Moher have appeared in numerous movies, including 
        Harry Potter and the Half-Blood Prince (2009), Leap Year (2010), Into the West (1992) and Hear My Song (1991). 
        Our favourite has got to be their role as the Cliffs of Insanity in Rob Reiner's meta-fairytale fantasy 
        The Princess Bride (1987). A brief but brilliant cameo. Leave them out? Inconceivable!`
    },
    "Kilmainham Gaol": {
        title: "Kilmainham Gaol",
        imageSrc: "assets/images/irl-kilmainham.jpg",
        imageAltText: "photo of Kilmainham Gaol",
        description: `Many of the jail scenes for In the Name of the Father (1993) were filmed at this historic location, 
        but it's not just Daniel Day Lewis and Co who have breathed new life into the creepy old interiors. 
        Kilmainham has also featured in The Italian Job (1969), Michael Collins (1996), The Wind that Shakes the Barley (2006) 
        and BBC's Ripper Street among others. It closed its doors as a prison in 1924, but is one of Dublin's top visitor 
        attractions today.`
    },
    "Lough Tay": {
        title: "Lough Tay",
        imageSrc: "assets/images/irl-loughtay.jpg",
        imageAltText: "photo of Lough Tay",
        description: `This Wicklow wonder features in several movie and tv shows, Vikings (since 2013) is the most recent, though this 
        was also a setting for Leap Year (2010), Becoming Jane (2007) with Anne Hathaway and a famous scene in John Boorman's Excalibur (1981).
        Wicklow, once dubbed "the Hollywood of Europe" by Jane Seymour, is home to oodles of famous movie and TV locations.`
    }
};

// Write the function to get the elements from the object 
function getElements({
    title,
    imageSrc,
    imageAltText,
    description
}) {
    // return the value held in the objects in template literal string
    return `<img src="${imageSrc}" alt="${imageAltText}">
    <p>${title}</p>
    <hr class="country-title-hr">
    <p>${description}</p>`;
}

// function is called on click of li items 
// iceland buttons 
$("#iceland-li-one").click(function () {
    $("#iceland-div").html(
        getElements(destinations.Dettifoss)
    );
});

$("#iceland-li-two").click(function () {
    $("#iceland-div").html(
        getElements(destinations["Mýrdalssandur beach"])
    );
});

$("#iceland-li-three").click(function () {
    $("#iceland-div").html(
        getElements(destinations["Reyðarfjörður"])
    );
});

$("#iceland-li-four").click(function () {
    $("#iceland-div").html(
        getElements(destinations["Skógafoss"])
    );
});

$("#iceland-li-five").click(function () {
    $("#iceland-div").html(
        getElements(destinations["Hverfjall mountain"])
    );
});


// function calls on click - malta buttons 

$("#malta-li-one").click(function () {
    $("#malta-div").html(
        getElements(destinations.Gozo)
    );
});

$("#malta-li-two").click(function () {
    $("#malta-div").html(
        getElements(destinations["Popeye village"])
    );
});

$("#malta-li-three").click(function () {
    $("#malta-div").html(
        getElements(destinations["Blue Lagoon"])
    );
});

$("#malta-li-four").click(function () {
    $("#malta-div").html(
        getElements(destinations.Valletta)
    );
});

$("#malta-li-five").click(function () {
    $("#malta-div").html(
        getElements(destinations.Mdina)
    );
});

// function calls on click - New Zealand buttons 

$("#newzealand-li-one").click(function () {
    $("#newzealand-div").html(
        getElements(destinations["Lake Pukaki"])
    );
});

$("#newzealand-li-two").click(function () {
    $("#newzealand-div").html(
        getElements(destinations.Hobbiton)
    );
});

$("#newzealand-li-three").click(function () {
    $("#newzealand-div").html(
        getElements(destinations["Cathedral Cove"])
    );
});

$("#newzealand-li-four").click(function () {
    $("#newzealand-div").html(
        getElements(destinations["Fiordland National Park"])
    );
});

$("#newzealand-li-five").click(function () {
    $("#newzealand-div").html(
        getElements(destinations["Mount Taranaki"])
    );
});

// function calls on click - Morocco buttons 

$("#morocco-li-one").click(function () {
    $("#morocco-div").html(
        getElements(destinations["Aït Benhaddou"])
    );
});

$("#morocco-li-two").click(function () {
    $("#morocco-div").html(
        getElements(destinations.Tangier)
    );
});

$("#morocco-li-three").click(function () {
    $("#morocco-div").html(
        getElements(destinations["Erg Chebbi"])
    );
});

$("#morocco-li-four").click(function () {
    $("#morocco-div").html(
        getElements(destinations.Marrakesh)
    );
});

$("#morocco-li-five").click(function () {
    $("#morocco-div").html(
        getElements(destinations.Essaouira)
    );
});

// function calls on click - Ireland buttons 

$("#ireland-li-one").click(function () {
    $("#ireland-div").html(
        getElements(destinations["Skellig Michael"])
    );
});

$("#ireland-li-two").click(function () {
    $("#ireland-div").html(
        getElements(destinations.Powerscourt)
    );
});

$("#ireland-li-three").click(function () {
    $("#ireland-div").html(
        getElements(destinations["Cliffs of Moher"])
    );
});

$("#ireland-li-four").click(function () {
    $("#ireland-div").html(
        getElements(destinations["Kilmainham Gaol"])
    );
});

$("#ireland-li-five").click(function () {
    $("#ireland-div").html(
        getElements(destinations["Lough Tay"])
    );
});