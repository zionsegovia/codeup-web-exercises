
// storing some ids so i can use them further on
const theTime = document.querySelector("#time");
const theDate = document.querySelector("#date")
const currentWeatherStuff = document.querySelector('#curWeatherStuff');
const futureWeatherData = document.querySelector("#futureWeatherData")
//array of the days of the week
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//array of the months
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// code to display the time onto the page (very awesome)
setInterval(() => {
    const now = new Date();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();
    const hour = now.getHours();
    const hours24hr = hour >= 13 ? hour % 12 : hour
    const minutes = now.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    theTime.innerHTML = hours24hr + ':' + minutes + '' + `<span id="am-pm">${ampm}</span> `

    theDate.innerHTML = daysOfTheWeek[day] + ',' + date + ' ' + months[month]
}, 1000);

const SALong = -98.48527;
const SALat = 29.423017;

mapboxgl.accessToken = MAPBOX_API_TOKEN;
const newMap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zionsegovia/clflyb762004h01nus4uzj8iq',
    center: [SALong, SALat],
    zoom: 12
});
// show default sa data on load
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
    .done(data => {
        showData(data);
    });
newMap.on('click', function(e) {
    const lon = e.lngLat.lng;
    const lat = e.lngLat.lat;
    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        .done(data => {
            showData(data);
        });
});
// add data onto the page
function showData(data) {
    let { name } = data;
    let { speed } = data.wind;
    currentWeatherStuff.innerHTML = `
    <div class="weathername">${name}</div>
    <div class="temp">${data.main.temp} &#8457;</div>
    <div class="humidity">Humidity: ${data.main.humidity}%</div>
    <div class="pressure">Pressure: ${data.main.pressure}</div>
    <div class="wind">Wind Speed: ${speed}Mph</div
  `;





}
//get weather data forecasts
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    lat: SALat,
    lon: SALong,
    units: "imperial"
}).done(function(data) {
    console.log(data);
    let currentDate = new Date();
    let currentDayOfWeek = currentDate.getDay();
    let dailyForecasts = {};
    data.list.forEach((forecast, index) => {
        const time = new Date(forecast.dt * 1000);
        const dayOfWeek = time.getDay();
        if (dayOfWeek !== currentDayOfWeek && index % 8 === 0) {
            const dateKey = time.toLocaleDateString();
            if (!dailyForecasts[dateKey]) {
                dailyForecasts[dateKey] = {};
            }
            dailyForecasts[dateKey]['dt'] = forecast.dt;
            dailyForecasts[dateKey]['high'] = forecast.main.temp_max;
            dailyForecasts[dateKey]['low'] = forecast.main.temp_min;
            dailyForecasts[dateKey]['pressure'] = forecast.main.pressure;
            dailyForecasts[dateKey]['humidity'] = forecast.main.humidity;
            dailyForecasts[dateKey]['windSpeed'] = forecast.wind.speed;
            dailyForecasts[dateKey]['weather'] = forecast.weather;
        }
    });
    console.log(dailyForecasts, 'the daily');
    showDataMore(dailyForecasts);
});

//display data onto the page
function showDataMore(dailyForecasts) {
    const futureWeatherData = [
        document.querySelector("#futureWeatherData"),
        document.querySelector("#futureWeatherDataTwo"),
        document.querySelector("#futureWeatherDataThree"),
        document.querySelector("#futureWeatherDataFour"),
    ];

    for (let i = 0; i < futureWeatherData.length; i++) {
        const date = Object.keys(dailyForecasts)[i];
        const forecast = dailyForecasts[date];

        futureWeatherData[i].innerHTML = `
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="weather image" class="weatherLogo">
      <div class="day">${new Date(forecast.dt * 1000).toLocaleDateString("en-US", {weekday: "short"})}</div>
      <div class="temp-high">High ${forecast.high}</div>
      <div class="temp-low">Low ${forecast.low}</div>
      <br>
      <div class="temp">Humidity</div>
      <div class="temp">${forecast.humidity}</div>
      <div class="temp">Pressure</div>
      <div class="temp">${forecast.pressure}</div>
      <div class="temp">Windspeed</div>
      <div class="temp">${forecast.windSpeed}</div>
    `;
    }
}
    async function getWeatherData(lat, lon) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APPID}&units=metric`);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to get weather data');
        }
    }

    function updateWeatherInfo(weatherData) {
        const {name, main, weather} = weatherData;

        // update the current weather info
        currentWeatherStuff.innerHTML = `
    <div class="city">${name}</div>
    <div class="temp">${Math.round(main.temp)}&#176;</div>
    <div class="description">${weather[0].description}</div>
  `;

        // update the forecast for the current day
        const {dt} = weatherData;
        const date = new Date(dt * 1000);
        const day = daysOfTheWeek[date.getDay()];
        const icon = weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
        const {temp_min, temp_max} = main;

        todayStuff.innerHTML = `
    <img src="${iconUrl}" alt="weather image" class="weatherLogo">
    <div class="others">
      <div class="day">${day}</div>
      <div class="temp">Night ${Math.round(temp_min)}&#176;</div>
      <div class="temp">Day ${Math.round(temp_max)}&#176;</div>
    </div>
  `;
    }
// get forecast data
    function getForecastData(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                let currentDate = new Date();
                let currentDayOfWeek = currentDate.getDay();
                let dailyForecasts = {};
                data.list.forEach((forecast, index) => {
                    const time = new Date(forecast.dt * 1000);
                    const dayOfWeek = time.getDay();
                    if (dayOfWeek !== currentDayOfWeek && index % 8 === 0) {
                        const dateKey = time.toLocaleDateString();
                        if (!dailyForecasts[dateKey]) {
                            dailyForecasts[dateKey] = {};
                        }
                        dailyForecasts[dateKey]['dt'] = forecast.dt;
                        dailyForecasts[dateKey]['high'] = forecast.main.temp_max;
                        dailyForecasts[dateKey]['low'] = forecast.main.temp_min;
                        dailyForecasts[dateKey]['pressure'] = forecast.main.pressure;
                        dailyForecasts[dateKey]['humidity'] = forecast.main.humidity;
                        dailyForecasts[dateKey]['windSpeed'] = forecast.wind.speed;
                        dailyForecasts[dateKey]['weather'] = forecast.weather;
                    }
                });
                return dailyForecasts;
            });
    }

    newMap.on('click', function (e) {
        const lat = e.lngLat.lat;
        const lon = e.lngLat.lng;
        Promise.all([
            $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APPID}&units=imperial`),
            getForecastData(lat, lon)
        ]).then(([currentData, futureData]) => {
            showData(currentData);
            showDataMore(futureData);
        });
    });

// sets a marker at users input
document.getElementById("setMarkerButton").addEventListener
('click', event=>{
    event.preventDefault();
    const address = document.getElementById('setMarker').value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(newMap);
        newMap.setCenter(coords);

    });
});

