import { useState } from "react";

export default function WeatherApp() {
  const API_KEY = "065e17631b69406a8e49dff91028a3b6"
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
        <h1 className="text-2xl font-bold mb-4">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          className="p-2 border rounded-lg w-full mb-4"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
          onClick={fetchWeather}
        >
          Get Weather
        </button>

        {weather && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h2>
            <p className="text-lg">{weather.main.temp}°C</p>
            <p className="text-gray-600">{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
