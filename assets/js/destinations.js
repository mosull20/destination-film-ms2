// function to display the relevant div on clicking 

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

// function to push html depending on which heading the user clicks on
$("#iceland-li-one").click(function () {
    $("#iceland-div").html(
        `<img src="assets/images/dettifoss.jpg" alt="photo of Dettifoss waterfall">
        <p>Dettifoss</p>
                        <hr class="country-title-hr">
        <p>Dettifoss (Falling Waterfall) is an amazing waterfall. No wonder Riddley Scott chose this
            spectacular scenery to be the background of the opening scene of his movie Prometheus (2012). 
            It is situated in the north eastern part of Iceland in Icelands biggest national park.
        </p>
        `
    );
})

$("#iceland-li-two").click(function () {
    $("#iceland-div").html(
        `<img src="assets/images/mýrdalssandurbeach.jpg" alt="photo of Mýrdalssandur beach">
        <p>Mýrdalssandur beach</p>
                        <hr class="country-title-hr">
        <p>The black sandy beaches that appear in scenes throughout Rogue One: A Star Wars story can be found in Mýrdalssandur. 
        The black sands are formed from lava. And despite the barren landscape, arctic foxes and seabirds can often be found here.
        </p>
        `
    );
})

$("#iceland-li-three").click(function () {
    $("#iceland-div").html(
        `<img src="assets/images/Reyðarfjörður.jpg" alt="photo of Reyðarfjörður">
        <p>Reyðarfjörður</p>
        <hr class="country-title-hr">
        <p>The TV series Fortitude are entirely filmed in Reyðarfjörður in the East fjords of Iceland. 
        (Guide to Iceland). The town has outdoor activities that appeal to locals and visitors. A walk to the waterfall in Búðará is 
        recommended, as is the walk towards the town centre, along the 'Love Lane', and a hike to the sheltered area beneath the 
        shrub-covered slopes of Grænafell peak is a must. (east.is)
        </p>
        `
    );
})

$("#iceland-li-four").click(function () {
    $("#iceland-div").html(
        `<img src="assets/images/skógafoss.jpg" alt="photo of Skógafoss waterfall">
        <p>Skógafoss</p>
        <hr class="country-title-hr">
        <p>The beautiful Skógafoss waterfall was one of the filming locations for Thor: The Dark World. The locations really gave 
        the film some wonderfully authentic visuals. One of Iceland's most splendid waterfalls, Skógafoss is a sight to behold.
        </p>
        `
    );
})

$("#iceland-li-five").click(function () {
    $("#iceland-div").html(
        `<img src="assets/images/hverfjallmountain.jpg" alt="photo of Hverfjall mountain">
        <p>Hverfjall mountain</p>
        <hr class="country-title-hr">
        <p>As seen in the opening scenes of Star Trek Discovery season 3, Hverfjall is 396 meter (1,300 ft) high tephra explosion crater. It is located near the eastern shore of Lake Myvatn 
        in North Iceland. Resembling a black ash cone of mammoth proportions, you can walk up the steep slopes and around the 
        crater’s rim for otherworldly and awesome view of the surrounding landscape. (Iceland.is)
        </p>
        `
    );
})

// malta section

$("#malta-li-one").click(function () {
    $("#malta-div").html(
        `<img src="assets/images/malta-city.jpg" alt="photo of Gozo">
        <p>Gozo</p>
        <hr class="country-title-hr">
        <p>Malta and its two smaller satellite islands of Gozo and Comino have featured in various
            productions,
            arguably the most popular of which is Game of Thrones. Brad Pitt and Angelina Jolie filmed
            the ultimately
            prophetic break-up movie By the Sea on Gozo, the locations represented an idyllic version of
            1960's France. (culture trip.)
        </p>
        `
    );
})

$("#malta-li-two").click(function () {
    $("#malta-div").html(
        `<img src="assets/images/malta-popeye.jpg" alt="photo of Popeye village">
        <p>Popeye village</p>
        <hr class="country-title-hr">
        <p>Popeye Village was constructed for the sole purpose of serving as the location for 1980’s Popeye movie. 
        Soon after filming wrapped, it was abandoned, but the collection of wooden buildings sitting on the cliffs 
        of Anchor Bay found a new lease of life as a theme park.
        </p>
        `
    );
})

$("#malta-li-three").click(function () {
    $("#malta-div").html(
        `<img src="assets/images/malta-blue-lagoon.jpg" alt="photo of Blue Lagoon">
        <p>Blue Lagoon</p>
        <hr class="country-title-hr">
        <p>Malta’s smallest island, Comino, currently only has a population of three, yet thousands of people flock here
        for one reason: the Blue Lagoon. Its mesmerising fluorescent waters are famous around the world.
        The tiny island featured in several movies, including The Count of Monte Cristo (2002) and Swept Away (2002).
        </p>
        `
    );
})

$("#malta-li-four").click(function () {
    $("#malta-div").html(
        `<img src="assets/images/malta-valetta.jpg" alt="photo of Valetta">
        <p>Valetta</p>
        <hr class="country-title-hr">
        <p>Back in the capital – which ends up featuring in most of the movies already mentioned as well as a number 
        of others exclusively filmed here – Valletta‘s forts and walled sections make it perfect for period films as 
        well as fighting off zombies when it stood in for Jerusalem in World War Z(2013).
        </p>
        `
    );
})

$("#malta-li-five").click(function () {
    $("#malta-div").html(
        `<img src="assets/images/malta-mdina.jpg" alt="photo of Mdina">
        <p>Mdina</p>
        <hr class="country-title-hr">
        <p>Malta’s former capital, Mdina, known as the Silent City, is a medieval walled city with narrow streets, 
        centuries-old buildings and, at its heart, a cathedral that dominates the skyline. Mdina featured in Game of Thrones, 
        as did nearby Rabat, standing in for early depictions of King’s Landing. 
        </p>
        `
    );
})

// new zealand section

$("#newzealand-li-one").click(function () {
    $("#newzealand-div").html(
        `<img src="assets/images/nz-lakepukaki.jpg" alt="photo of Lake Pukaki">
        <p>Lake Pukaki</p>
        <hr class="country-title-hr">
        <p>Lake Pukaki is a shimmering blue jewel set into a grand alpine playground - an iconic New
        Zealand landscape of high mountain peaks and glacier fed alpine lakes.
        Used for many major location scenes in The Lord of the Rings and The
        Hobbit Trilogies, particularly ‘Lake-town’ in The Hobbit: The Desolation of Smaug (media
        New Zealand.com)
        </p>
        `
    );
})

$("#newzealand-li-two").click(function () {
    $("#newzealand-div").html(
        `<img src="assets/images/nz-hobbiton.jpg" alt="photo of Hobbiton">
        <p>Hobbiton</p>
        <hr class="country-title-hr">
        <p>The lush dairy farming landscape around the Waikato town of Matamata was used to portray the peaceful Shire 
        region of Middle‑earth™. The village of Hobbiton was created here with brilliant attention to detail.
        It was later rebuilt for the filming of The Hobbit Trilogy and is now a permanent attraction. (newzealand.com)
        </p>
        `
    );
})

$("#newzealand-li-three").click(function () {
    $("#newzealand-div").html(
        `<img src="assets/images/nz-cathedral-cove.jpg" alt="photo of Cathedral Cove">
        <p>Cathedral Cove</p>
        <hr class="country-title-hr">
        <p>The set for the ruins of the castle Cair Paravel, in the Chronicles of Narnia- Prince Caspian, was built 
        on the nearby Hereherataura Peninsula, overlooking iconic Cathedral Cove. From beautiful Hahei Beach on the 
        Coromandel Peninsula you can walk to Cathedral Cove. (newzealand.com)
        </p>
        `
    );
})

$("#newzealand-li-four").click(function () {
    $("#newzealand-div").html(
        `<img src="assets/images/nzfiordland.jpg" alt="photo of Fiordland National Park">
        <p>Fiordland National Park</p>
        <hr class="country-title-hr">
        <p>The breathtaking landscapes of Fiordland National Park were used by director Ridley Scott who shot “Alien Covenant” 
        around its most northern and accessible end. It offers some of the most jaw-dropping coastal scenery with magnificent 
        dark blue waters and dramatic peaks. 
        The almost always present low-lying clouds made a perfect otherworldly backdrop. (tripstodiscover.com)
        </p>
        `
    );
})

$("#newzealand-li-five").click(function () {
    $("#newzealand-div").html(
        `<img src="assets/images/nz-mount-taranaki.jpg" alt="photo of Mount Taranaki">
        <p>Mount Taranaki</p>
        <hr class="country-title-hr">
        <p>Most of the filming of The Last Samurai, starring Tom Cruise, took place near New Plymouth in Taranaki. 
        A Japanese village was constructed for filming on the hillsides of the Uruti Valley, with Mount Taranaki 
        standing in for ‘Mount Fuji‘. (newzealand.com)
        </p>
        `
    );
})

// img src="assets/images/mor-ait-benhaddou.jpg" alt="photo of Ait Benhaddou">
//                             <p>Aït Benhaddou</p>
//                             <hr class="country-title-hr">
//                             <p>The glorious earth-built traditional Berber ksar of Ait Ben Haddou is a dream come true
//                                 for
//                                 photographers and film-makers. The towering sand-colored walls,
//                                 narrow interior pathways and staircases, traditional abodes, and panoramic vistas have
//                                 featured in
//                                 a number of movies, including Gladiator, Lawrence of Arabia, and Jewel of the Nile. Fans
//                                 of Game of Thrones
//                                 may recognize the glorious site as the fictitious Yellow City of Yunkai. (culture trip)
//                             </p>

// morocco section

$("#morocco-li-one").click(function () {
    $("#morocco-div").html(
        `<img src="assets/images/mor-ait-benhaddou.jpg" alt="photo of Ait Benhaddou">
        <p>Aït Benhaddou</p>
        <hr class="country-title-hr">
        <p>The glorious earth-built traditional Berber ksar of Ait Ben Haddou is a dream come true
            for
            photographers and film-makers. The towering sand-colored walls,
            narrow interior pathways and staircases, traditional abodes, and panoramic vistas have
            featured in
            a number of movies, including Gladiator, Lawrence of Arabia, and Jewel of the Nile. Fans
            of Game of Thrones
            may recognize the glorious site as the fictitious Yellow City of Yunkai. (culture trip)
        </p>
        `
    );
})

$("#morocco-li-two").click(function () {
    $("#morocco-div").html(
        `<img src="assets/images/mor-tangier.jpg" alt="photo of Tangier">
        <p>Tangier</p>
        <hr class="country-title-hr">
        <p>The bustling Grand Souk in Morocco’s northern coastal city of Tangier was chosen as 
        the perfect place to film the exhilarating chase scene in Inception, with Tangier also 
        filling in for Kenya’s large city of Mombasa. Tangier also saw plenty of action during 
        the filming of The Bourne Ultimatum, and it has featured in several James Bond movies, 
        including From Russia with Love and The Living Daylights. (culture trip)</p>
        `
    );
})

$("#morocco-li-three").click(function () {
    $("#morocco-div").html(
        `<img src="assets/images/mor-erg-chebbi.jpg" alt="photo of Erg Chebbi">
        <p>Erg Chebbi</p>
        <hr class="country-title-hr">
        <p>The majestic and towering dunes of Erg Chebbi inspire awe in most that see them. 
        It is no surprise, therefore, that the site has been noticed by film producers. 
        In The Mummy Returns, the Moroccan desert was used for scenes that supposedly occurred 
        in the Egyptian desert. (culture trip)
        </p>
        `
    );
})

$("#morocco-li-four").click(function () {
    $("#morocco-div").html(
        `<img src="assets/images/mor-marrakech1.jpg" alt="photo of Marrakesh">
        <p>Marrakesh</p>
        <hr class="country-title-hr">
        <p>Avid film fans may be surprised to find out that a hotel, Amanjena, in Marrakech 
        was used as a stand-in for Abu Dhabi in Sex and the City 2 (culture trip).
        Places such as Mandarin Oriental, Mouassine and Jema El Fna Square (the latter where 
        they appear wandering around the bustling souk markets) are some of the star filming 
        locations of the movie.(villasmarrakech.com)</p>
        `
    );
})

$("#morocco-li-five").click(function () {
    $("#morocco-div").html(
        `<img src="assets/images/mor-essaouira.jpg" alt="photo of Essaouira">
        <p>Essaouira</p>
        <hr class="country-title-hr">
        <p>The popular coastal town of Essaouira was one of many global locations chosen to film Alexander, and it 
        was transformed for Kingdom of Heaven to represent ancient Jerusalem. If you love Game of Thrones you’ll 
        likely enjoy exploring Astapor; Essaouira was the setting for the fictitious area.  
        </p>
        `
    );
})