document
  .getElementById("weatherForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const city = document.getElementById("cityInput").value;
    const apiKey = "335d3d080742062e11c8af94b7416afb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        document.getElementById("cityName").textContent = data.name;
        document.getElementById(
          "temperature"
        ).textContent = `${data.main.temp}°C`;
        document.getElementById("description").textContent =
          data.weather[0].description;
        document.getElementById(
          "humidity"
        ).textContent = `${data.main.humidity}%`;
        document.getElementById("wind").textContent = `${data.wind.speed} m/s`;
        document.getElementById("weatherResult").style.display = "block";
      } else {
        alert("City not found.Enter a valid city.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    document.getElementById("weatherForm").reset();
  });
