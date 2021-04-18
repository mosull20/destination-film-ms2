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