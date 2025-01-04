"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Snowflake } from "lucide-react";

export default function WeatherCard({ city }: { city: string }) {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  const getWeatherIcon = (weatherCode: string) => {
    switch (weatherCode) {
      case "01d":
      case "01n":
        return <Sun className="h-12 w-12" />;
      case "02d":
      case "02n":
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return <Cloud className="h-12 w-12" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <CloudRain className="h-12 w-12" />;
      case "13d":
      case "13n":
        return <Snowflake className="h-12 w-12" />;
      default:
        return <Cloud className="h-12 w-12" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Current Weather in {city}</CardTitle>
      </CardHeader>
      <CardContent>
        {weather ? (
          <div className="text-center">
            {weather.weather && weather.weather[0] ? (
              getWeatherIcon(weather.weather[0].icon)
            ) : (
              <p className="text-muted-foreground">No weather icon available</p>
            )}
            <p className="text-2xl font-bold mt-4">
              {weather.main && weather.main.temp !== undefined
                ? `${Math.round(weather.main.temp)}°C`
                : "N/A"}
            </p>
            <p className="text-muted-foreground">
              {weather.weather && weather.weather[0]?.description
                ? weather.weather[0].description
                : "No description available"}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Humidity</p>
                <p className="font-medium">
                  {weather.main && weather.main.humidity !== undefined
                    ? `${weather.main.humidity}%`
                    : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Wind Speed</p>
                <p className="font-medium">
                  {weather.wind && weather.wind.speed !== undefined
                    ? `${weather.wind.speed} m/s`
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">Loading weather data...</p>
        )}
      </CardContent>
    </Card>
  );
}
