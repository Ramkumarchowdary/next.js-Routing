"use client";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const CityWeather = ({ params }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    console.log("data");
    fetchWeather();
    if (params.cityName) {
      fetchWeather();
    }
  }, [params.cityName]);
  
  const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${params.cityname}&appid=8ffeeb303991d3093a8987924f72b8bf`;

  const fetchWeather = async () => {
    const response = await fetch(APIURL);
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
    // console.log(data);
  };

  return (
    <Paper
      sx={{
        maxWidth: 300,
        mx: "auto",
        my: "auto",
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "sm",
        boxShadow: "md",
        alignSelf: "center",
        marginTop:"80px",
        // backgroundColor: "blue",
      }}
    >
      <Link href="../../city">back</Link>
      {weatherData && (
        <>
          <Typography color="neutral" level="h2" variant="solid">
            Weather in {weatherData?.name}☁️
          </Typography>
          <Typography color="primary" level="title-lg" variant="soft">
            Temperature: {weatherData?.main?.temp}🌡️
          </Typography>
          <Typography color="primary" level="title-lg" variant="soft">
            Feels_like: {weatherData?.main?.feels_like}
          </Typography>
          <Typography color="primary" level="title-lg" variant="soft">
            Temp_min: {weatherData?.main?.temp_min}
          </Typography>
          <Typography color="primary" level="title-lg" variant="soft">
            Temp_max: {weatherData?.main?.temp_max}
          </Typography>

          <Typography color="primary" level="title-lg" variant="soft">
            Humidity: {weatherData?.main?.humidity}
          </Typography>

          <Typography color="primary" level="title-lg" variant="soft">
            Sunrise: {weatherData?.sys?.sunrise}⛅
          </Typography>

          {/* <Image src={`/images/${params.cityName}.jpg`} alt={`${params.cityName} Image`} width={200} height={200} /> */}
        </>
      )}

    </Paper>
    
  );
};

export default CityWeather;
