// function to toggle font awesome arrow up or down on click
// assisted by Stack overflow 
function arrowSwitch(event) {
    this.classList.toggle("fa-angle-double-up")
}

let arrow = document.getElementById('arrow');
arrow.addEventListener('click', arrowSwitch);

// $(".iceland-text a").click(function () {
//     $("#box-one").html(
// )
// });

$("#iceland-li-one").click(function () {
    $("#iceland-div").html(
        `<p>Dettifoss (Falling Waterfall) is an amazing waterfall. No wonder Riddley Scott chose this
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