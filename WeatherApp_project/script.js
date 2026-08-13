async function getWeather() {

    let city =
        document.getElementById("city").value;

    let apiKey =
        "99a1f0b59786070c4e43d01f6b467be6";

    let url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        let response =
            await fetch(url);

        let data =
            await response.json();

        if (data.cod != 200) {
            document.getElementById(
                "result"
            ).innerHTML =
                "City Not Found";
            return;
        }

        document.getElementById(
            "result"
        ).innerHTML = `

<h2>${data.name}</h2>

<p>🌡️ Temp:
${data.main.temp}°C</p>

<p>☁️ ${data.weather[0].main}</p>

<p>💨 Wind:
${data.wind.speed}</p>

`;

    }
    catch {

        document.getElementById(
            "result"
        ).innerHTML =
            "Error";

    }

}