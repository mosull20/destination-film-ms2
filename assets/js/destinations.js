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
        <p>Dettifoss (Falling Waterfall) is an amazing waterfall. No wonder Riddley Scott chose this
            spectacular
            scenery
            to be the background of the opening scene of his movie Prometheus (2012). Dettifoss is europes
            biggest
            waterfall by volume.
            It is situated in the north eastern part of Iceland in Icelands biggest national park.
            Hiking trails lead you through a series of other little less known waterfalls but each and every
            one
            an
            eye candy on its own.
            Selfoss and Hafragilsfoss are close runner ups.
        </p>
        `
    );
})

$("#iceland-li-two").click(function () {
    $("#iceland-div").html(
        `<p>The black sandy beaches that appear in scenes throughout Rogue One: A Star Wars story can be found in Mýrdalssandur. 
        The black sands are formed from lava. And despite the barren landscape, arctic foxes and seabirds can often be found here.
        </p>
        `
    );
})

$("#iceland-li-three").click(function () {
    $("#iceland-div").html(
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam fringilla lectus elementum maximus. 
        Praesent orci mauris, consequat eu nisl nec, mollis efficitur nunc. Cras vestibulum varius congue. Nullam in metus 
        vitae dui efficitur tempor.
        </p>
        `
    );
})

$("#iceland-li-four").click(function () {
    $("#iceland-div").html(
        `<p>Fusce pulvinar ante ut orci consectetur luctus. Donec ultrices dolor sit amet malesuada pharetra. 
        Proin fringilla magna sit amet odio vestibulum, sed fermentum mi vulputate. Sed urna massa, tincidunt at convallis eu, viverra a metus.
        </p>
        `
    );
})

$("#iceland-li-five").click(function () {
    $("#iceland-div").html(
        `<p>Morbi ut eleifend lorem, sit amet lobortis metus. Aenean eu elit ac risus vestibulum convallis. 
        Vestibulum cursus turpis sed auctor sodales. Nunc neque diam, elementum sit amet neque in, volutpat bibendum lectus.
        </p>
        `
    );
})