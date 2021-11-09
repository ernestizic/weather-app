import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ForecastContext = createContext();

const ForecastContextProvider = (props) => {
  const apikey = process.env.REACT_APP_API_KEY;

  const [todayForecast, setTodayForecast] = useState([]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&appid=${apikey}&units=metric`
      );
      const data = await res.data;
      setTodayForecast(data);
      setIsLoading(false);
    };
    fetchWeatherData();
  }, [apikey, lat, lng]);


  return (
    <ForecastContext.Provider value={{ isLoading, todayForecast }}>
      {props.children}
    </ForecastContext.Provider>
  );
};

export default ForecastContextProvider;
