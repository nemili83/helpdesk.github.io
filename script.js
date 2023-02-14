const searchBox = document.querySelector('.search-box');
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const locationBox = document.querySelector('.location');
const weatherBox = document.querySelector('.weather');
const temperatureBox = document.querySelector('.temperature');
const iconBox = document.querySelector('.icon');
const resultsBox = document.querySelector('.results');

searchBtn.addEventListener('click', function() {
  if (searchBar.value) {
    resultsBox.style.display = 'block';
    getWeather(searchBar.value);
  }
});

function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55b567790d8e4eb2f61aee05734f0e86&units=metric`)
    .then(response => response.json())
    .then(data => {
      const location = `${data.name}, ${data.sys.country}`;
      const weather = data.weather[0].description;
      const temperature = `${data.main.temp}°C`;
      const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

      locationBox.textContent = location;
      weatherBox.textContent = weather;
      temperatureBox.textContent = temperature;
      iconBox.innerHTML = `<img src="${icon}" alt="${weather}">`;
    })
    .catch(error => console.error(error));
}
