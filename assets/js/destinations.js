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
        `<img src="assets/images/malta-gozo.jpg" alt="photo of Gozo">
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

// ireland section

$("#ireland-li-one").click(function () {
    $("#ireland-div").html(
        `<img src="assets/images/irl-skellig-michael.jpg" alt="photo of Skellig Micheal">
        <p>Skellig Michael</p>
        <hr class="country-title-hr">
        <p>Star Wars is the movie that made Skellig Michael even more famous than it was. While
            looking
            for a spot to act as the planet of Ahch To which featured at the end of The Force
            Awakens,
            it was decided that Skellig Michael was to be the galaxy far, far away.
            (irelandbeforeyoudie.com).
            Star Wars: The Last Jedi (2017) amped it up another level, with long scenes filmed not
            just on the Skelligs,
            but Malin Head in Co Donegal and on the Dingle Peninsula. (independent.ie)
        </p>
        `
    );
})

$("#ireland-li-two").click(function () {
    $("#ireland-div").html(
        `<img src="assets/images/irl-powerscourt.jpg" alt="photo of Powerscourt Estate">
        <p>Powerscourt</p>
        <hr class="country-title-hr">
        <p>The Powerscourt Estate with its Georgian elegance, beautiful gardens, sweeping terraces, 
        cascading waterfall, lakes and hollows has been used in loads of movies and tv shows. If you love movies, 
        then Powerscourt is a must-visit destination. (wildrovertours.com)
         Over 25 movies or TV shows have filmed at Powerscourt House and Gardens, including King Arthur, 
         Excalibur, Mary Shelley, Love Rosie, the Count of Monte Cristo & The Tudors. 
        </p>
        `
    );
})
$("#ireland-li-three").click(function () {
    $("#ireland-div").html(
        `<img src="assets/images/irl-cliffsofmoher.jpg" alt="photo of Cliffs of Moher">
        <p>Cliffs of Moher</p>
        <hr class="country-title-hr">
        <p>Ireland's hero image? The Cliffs of Moher have appeared in numerous movies, including 
        Harry Potter and the Half-Blood Prince (2009), Leap Year (2010), Into the West (1992) and Hear My Song (1991). 
        Our favourite has got to be their role as the Cliffs of Insanity in Rob Reiner's meta-fairytale fantasy 
        The Princess Bride (1987). A brief but brilliant cameo. Leave them out? Inconceivable! (independent.ie)
        </p>
        `
    );
})

$("#ireland-li-four").click(function () {
    $("#ireland-div").html(
        `<img src="assets/images/irl-kilmainham.jpg" alt="photo of Kilmainham Gaol">
        <p>Kilmainham Gaol</p>
        <hr class="country-title-hr">
        <p>Many of the jail scenes for In the Name of the Father (1993) were filmed at this historic location, 
        but it's not just Daniel Day Lewis and Co who have breathed new life into the creepy old interiors. 
        Kilmainham has also featured in The Italian Job (1969), Michael Collins (1996), The Wind that Shakes the Barley (2006) 
        and BBC's Ripper Street among others. It closed its doors as a prison in 1924, but is one of Dublin's top visitor 
        attractions today. (independent.ie)
        </p>
        `
    );
})

$("#ireland-li-five").click(function () {
    $("#ireland-div").html(
        `<img src="assets/images/irl-loughtay.jpg" alt="photo of Lough Tay">
        <p>Lough Tay</p>
        <hr class="country-title-hr">
        <p>This Wicklow wonder features in several movie and tv shows, Vikings (since 2013) is the most recent, though this 
        was also a setting for Leap Year (2010), Becoming Jane (2007) with Anne Hathaway and a famous scene in John Boorman's Excalibur (1981).
        Wicklow, once dubbed "the Hollywood of Europe" by Jane Seymour, is home to oodles of famous movie and TV locations. 
        </p>
        `
    );
})

// Weather API 

fetch('https://api.openweathermap.org/data/2.5/weather?q=Reykjavik,is&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        let cityName = data['name'];
        let cityWeatherDesc = data['weather'][0]['description'];
        let cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
        //Get our img element by using document.getElementById
        var img = document.getElementsByClassName("wicon")[0];

        //Set the src property of our element to the new image URL
        img.src = iconurl;
        console.log(iconcode);

        document.getElementsByClassName("city-name")[0].innerHTML = cityName + `: `;
        document.getElementsByClassName("city-description")[0].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[0].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        document.getElementsByClassName("wicon")[0].classList.remove("hidden");
    })

fetch('https://api.openweathermap.org/data/2.5/weather?q=Valletta,mt&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        let cityName = data['name'];
        let cityWeatherDesc = data['weather'][0]['description'];
        let cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
        //Get our img element by using document.getElementById
        var img = document.getElementsByClassName("wicon")[1];
        //Set the src property of our element to the new image URL
        img.src = iconurl;
        console.log(iconcode);

        document.getElementsByClassName("city-name")[1].innerHTML = cityName + `: `;;
        document.getElementsByClassName("city-description")[1].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[1].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        img.classList.remove("hidden");
    })


fetch('https://api.openweathermap.org/data/2.5/weather?q=Wellington,nz&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        let cityName = data['name'];
        let cityWeatherDesc = data['weather'][0]['description'];
        let cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
        //Get our img element by using document.getElementById
        var img = document.getElementsByClassName("wicon")[2];
        //Set the src property of our element to the new image URL
        img.src = iconurl;
        console.log(iconcode);
        document.getElementsByClassName("city-name")[2].innerHTML = cityName + `: `;;
        document.getElementsByClassName("city-description")[2].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[2].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        img.classList.remove("hidden");
    })

fetch('https://api.openweathermap.org/data/2.5/weather?q=Rabat,ma&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        let cityName = data['name'];
        let cityWeatherDesc = data['weather'][0]['description'];
        let cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
        //Get our img element by using document.getElementById
        var img = document.getElementsByClassName("wicon")[3];
        //Set the src property of our element to the new image URL
        img.src = iconurl;
        console.log(iconcode);

        document.getElementsByClassName("city-name")[3].innerHTML = cityName + `: `;;
        document.getElementsByClassName("city-description")[3].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[3].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        img.classList.remove("hidden");
    })

fetch('https://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        let cityName = data['name'];
        let cityWeatherDesc = data['weather'][0]['description'];
        let cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
        //Get our img element by using document.getElementById
        var img = document.getElementsByClassName("wicon")[4];

        //Set the src property of our element to the new image URL
        img.src = iconurl;
        console.log(iconcode);

        document.getElementsByClassName("city-name")[4].innerHTML = cityName + `: `;;
        document.getElementsByClassName("city-description")[4].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[4].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        img.classList.remove("hidden");
    })