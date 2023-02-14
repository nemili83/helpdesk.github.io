const api_key = "55b567790d8e4eb2f61aee05734f0e86";
const url = `https://api.openweathermap.org/data/2.5/weather?q=your_city&units=metric&appid=${api_key}`;

fetch(url)
	.then(response => response.json())
	.then(data => {
		const temperature = Math.round(data.main.temp);
		const description = data.weather[0].description;
		document.getElementById("result").innerHTML = `Temperature: ${temperature} &deg;C<br>Description: ${description}`;
		document.getElementById("result").style.display = "block";
	})
	.catch(error => console.log(error));
