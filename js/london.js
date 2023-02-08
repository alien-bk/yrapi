const londonvaer = document.getElementById('londonTemp');

async function fetchWeather() {
  const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.509865&lon=-0.118092`);
  const data = await response.json();
  const temperature = data.properties.timeseries[0].data.instant.details.air_temperature;
  const windSpeed = data.properties.timeseries[0].data.instant.details.wind_speed;
  const speedOfWind = data.properties.meta.units.wind_speed;
  londonvaer.innerHTML = `Temperatur: ${temperature}°C          Vind fart: ${windSpeed} ${speedOfWind}`
}

fetchWeather();
