
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //console.log(apiResult);
        //Code Dealing With The API Data Goes Here

        //variables for weather data coming from the json
        var cityname = document.createTextNode(apiResult.name);
        var cityweather = document.createTextNode(apiResult.weather[0].description);
        var locationTitle = document.createTextNode(apiResult.name);
        var windspeed = document.createTextNode(apiResult.wind.speed);

        //display weather infomation
        var weatherReport = document.querySelectorAll('#weather-report p span.answers');
        var location = document.querySelectorAll('#weather-container h1 span.title');

        location[0].appendChild(locationTitle);
        weatherReport[0].appendChild(cityname);
        weatherReport[1].appendChild(cityweather);
        weatherReport[2].appendChild(windspeed);

        //console.log(apiResult.clouds);
        //console.log(apiResult.coord);
        //console.log(apiResult.name);
        //console.log(apiResult.weather[0].description);
        //console.log(apiResult.wind.speed);
        //console.log(apiResult.weather);
        //console.log(apiResult.wind);

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=30339,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
