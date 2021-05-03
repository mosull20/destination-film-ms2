// Weather API - OpenWeatherMap.org 
// Code from API documentation, stack overflow & thisinterestsme.com for displaying icons
fetch('https://api.openweathermap.org/data/2.5/weather?q=Reykjavik,is&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        const cityName = data['name'];
        const cityWeatherDesc = data['weather'][0]['description'];
        const cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = `https://openweathermap.org/img/w/${iconcode}.png`;
        //Get img element by using document.getElementById (thisinterestsme.com)
        var img = document.getElementsByClassName("wicon")[0];

        //Set the src property of element to the new image URL (thisinterestsme.com)
        img.src = iconurl;

        document.getElementsByClassName("city-name")[0].innerHTML = cityName + `: `;
        document.getElementsByClassName("city-description")[0].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[0].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        document.getElementsByClassName("wicon")[0].classList.remove("hidden");
    })
    .catch((err) => {
        alert("Weather not found!");
    })


fetch('https://api.openweathermap.org/data/2.5/weather?q=Valletta,mt&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        const cityName = data['name'];
        const cityWeatherDesc = data['weather'][0]['description'];
        const cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = `https://openweathermap.org/img/w/${iconcode}.png`;
        //Get img element by using document.getElementById (thisinterestsme.com)
        var img = document.getElementsByClassName("wicon")[1];
        //Set the src property of element to the new image URL (thisinterestsme.com)
        img.src = iconurl;

        document.getElementsByClassName("city-name")[1].innerHTML = cityName + `: `;;
        document.getElementsByClassName("city-description")[1].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[1].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        img.classList.remove("hidden");
    })
    .catch((err) => {
        alert("Weather not found!");
    })

fetch('https://api.openweathermap.org/data/2.5/weather?q=Wellington,nz&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        const cityName = data['name'];
        const cityWeatherDesc = data['weather'][0]['description'];
        const cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = `https://openweathermap.org/img/w/${iconcode}.png`;
        //Get img element by using document.getElementById (thisinterestsme.com)
        var img = document.getElementsByClassName("wicon")[2];
        //Set the src property of element to the new image URL (thisinterestsme.com)
        img.src = iconurl;

        document.getElementsByClassName("city-name")[2].innerHTML = cityName + `: `;;
        document.getElementsByClassName("city-description")[2].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[2].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        img.classList.remove("hidden");
    })
    .catch((err) => {
        alert("Weather not found!");
    })

fetch('https://api.openweathermap.org/data/2.5/weather?q=Rabat,ma&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        const cityName = data['name'];
        const cityWeatherDesc = data['weather'][0]['description'];
        const cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = `https://openweathermap.org/img/w/${iconcode}.png`;
        //Get img element by using document.getElementById (thisinterestsme.com)
        var img = document.getElementsByClassName("wicon")[3];
        //Set the src property of element to the new image URL (thisinterestsme.com)
        img.src = iconurl;

        document.getElementsByClassName("city-name")[3].innerHTML = cityName + `: `;;
        document.getElementsByClassName("city-description")[3].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[3].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        img.classList.remove("hidden");
    })
    .catch((err) => {
        alert("Weather not found!");
    })

fetch('https://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&units=metric&appid=b4dda6c99772835b257f99c1117ac187')
    .then(response => response.json())
    .then(data => {
        const cityName = data['name'];
        const cityWeatherDesc = data['weather'][0]['description'];
        const cityTemp = Math.round(data['main']['temp']);
        var iconcode = data['weather'][0]['icon'];
        var iconurl = `https://openweathermap.org/img/w/${iconcode}.png`;
        //Get img element by using document.getElementById (thisinterestsme.com)
        var img = document.getElementsByClassName("wicon")[4];

        //Set the src property of element to the new image URL (thisinterestsme.com)
        img.src = iconurl;

        document.getElementsByClassName("city-name")[4].innerHTML = cityName + `: `;;
        document.getElementsByClassName("city-description")[4].innerHTML = cityWeatherDesc;
        document.getElementsByClassName("city-temp")[4].innerHTML = cityTemp + `<span><sup>°C</sup></span>`;
        img.classList.remove("hidden");
    })
    .catch((err) => {
        alert("Weather not found!");
    })