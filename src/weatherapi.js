function loadWeather(outsideTemp) {
  $('#weather-container').append(Math.round(outsideTemp-273.15));
}

//const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5825517727cfeae7b4dda8b4de229d32`

function getWeatherURL(city) {
  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5825517727cfeae7b4dda8b4de229d32`)
}

getWeatherURL(("oslo"), (data) => {

loadWeather(data.main.temp);
console.log(data)
});

function displayWeather(city) {
  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5825517727cfeae7b4dda8b4de229d32`,
  function(data) {
    $('#weather-container').append(Math.round((data.main.temp)-273.15));
  })
}
