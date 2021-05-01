// Code here from Google Maps API documentation & Code Institute course content
function initMap() {
    var map = new google.maps.Map(document.getElementById("map-one"), {
        zoom: 6,
        center: {
            lat: 64.963942,
            lng: -19.021169
        }
    });

    var locations = [
        [{
            lat: 65.8146648,
            lng: -16.4020855
        }, "Dettifoss"],
        [{
            lat: 63.4549985,
            lng: -18.7953536
        }, "Mýrdalssandur beach"],
        [{
            lat: 65.031768,
            lng: -14.218712
        }, "Reyðarfjörður"],
        [{
            lat: 63.5320123,
            lng: -19.513565
        }, "Skógafoss"],
        [{
            lat: 65.6086097,
            lng: -16.8891762
        }, "Hverfjall mountain"],
    ];
    var infoWindow = new google.maps.InfoWindow();
    locations.forEach(([position, title]) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            optimized: false,
        });

        marker.addListener("mouseover", () => {
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
        marker.addListener("mouseout", () => {
            infoWindow.close();
        });
    });


    // section to show map on malta page

    var map = new google.maps.Map(document.getElementById("map-two"), {
        zoom: 10,
        center: {
            lat: 35.917973,
            lng: 14.409943
        }
    });

    var locations = [
        [{
            lat: 36.0468259,
            lng: 14.1899414
        }, "Gozo"],
        [{
            lat: 35.9597241,
            lng: 14.3388661
        }, "Popeye Village"],
        [{
            lat: 36.0139938,
            lng: 14.3053178
        }, "Blue Lagoon, Comino"],
        [{
            lat: 35.8984601,
            lng: 14.5089412
        }, "Valletta"],
        [{
            lat: 35.8872941,
            lng: 14.4018906
        }, "Mdina"],
    ];
    var infoWindow = new google.maps.InfoWindow();
    locations.forEach(([position, title]) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            optimized: false,
        });

        marker.addListener("mouseover", () => {
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
        marker.addListener("mouseout", () => {
            infoWindow.close();
        });
    });

    // section to show map on new zealand page

    var map = new google.maps.Map(document.getElementById("map-three"), {
        zoom: 5,
        center: {
            lat: -43.3744881,
            lng: 172.4662705
        }
    });

    var locations = [
        [{
            lat: -44.0524874,
            lng: 169.8888116
        }, "Lake Pukaki"],
        [{
            lat: -37.8721191,
            lng: 175.6807515
        }, "Hobbiton"],
        [{
            lat: -36.8277959,
            lng: 175.7883369
        }, "Cathedral Cove"],
        [{
            lat: -45.4202475,
            lng: 167.6827424
        }, "Fiordland National Park"],
        [{
            lat: -39.2967528,
            lng: 174.0546445
        }, "Mount Taranaki"],
    ];
    var infoWindow = new google.maps.InfoWindow();
    locations.forEach(([position, title]) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            optimized: false,
        });

        marker.addListener("mouseover", () => {
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
        marker.addListener("mouseout", () => {
            infoWindow.close();
        });
    });

    // section to show map on morocco page

    var map = new google.maps.Map(document.getElementById("map-four"), {
        zoom: 5,
        center: {
            lat: 31.794525,
            lng: -7.0849336
        }
    });

    var locations = [
        [{
            lat: 31.0466925,
            lng: -7.1342039
        }, "Aït Benhaddou"],
        [{
            lat: 35.7633932,
            lng: -5.9045097
        }, "Tangier"],
        [{
            lat: 31.1458509,
            lng: -3.9765326
        }, "Erg Chebbi"],
        [{
            lat: 31.6347485,
            lng: -8.0778931
        }, "Marrakesh"],
        [{
            lat: 31.5109789,
            lng: -9.7800517
        }, "Essaouira"],
    ];
    var infoWindow = new google.maps.InfoWindow();
    locations.forEach(([position, title]) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            optimized: false,
        });

        marker.addListener("mouseover", () => {
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
        marker.addListener("mouseout", () => {
            infoWindow.close();
        });
    });

    // section to show map on ireland page

    var map = new google.maps.Map(document.getElementById("map-five"), {
        zoom: 6,
        center: {
            lat: 53.428665,
            lng: -8.3320801
        }
    });

    var locations = [
        [{
            lat: 51.77129,
            lng: -10.5449314
        }, "Skellig Michael"],
        [{
            lat: 53.1842937,
            lng: -6.1888724
        }, "Powerscourt"],
        [{
            lat: 52.9715489,
            lng: -9.4396372
        }, "Cliffs of Moher"],
        [{
            lat: 53.3418733,
            lng: -6.3119935
        }, "Kilmainham Gaol"],
        [{
            lat: 53.1047342,
            lng: -6.2773659
        }, "Lough Tay"],
    ];
    var infoWindow = new google.maps.InfoWindow();
    locations.forEach(([position, title]) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            optimized: false,
        });

        marker.addListener("mouseover", () => {
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
        marker.addListener("mouseout", () => {
            infoWindow.close();
        });
    });
}