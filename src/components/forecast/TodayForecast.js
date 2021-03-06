import React, { useContext } from "react";
import { Forecast, StyledTodayForecast, TimeOfDay, Loader } from "../styles/TodayForecast.styled";
import { ForecastContext } from "../../contexts/ForecastContext";
import NextForecast from './NextForecast.js'
import moment from 'moment'
import Spinner from '../ui/Spinner'

// Today forecast component
const TodayForecast = () => {
  const { isLoading, todayForecast } = useContext(ForecastContext);

  return isLoading ? (
    <Loader> <Spinner /> </Loader>
  ) : (
    <StyledTodayForecast>
      <h1>Today's forecast</h1>

      <Forecast>
        {todayForecast.hourly.slice(0, 7).map((data) => (
          <TimeOfDay key={data.dt}>
            <p>{Math.round(data.temp)} &deg;c</p>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' />
            <p>{moment(data.dt * 1000).format('LT')}</p>
          </TimeOfDay>
        ))}
      </Forecast>

      <NextForecast />  
    </StyledTodayForecast>
  );
};

export default TodayForecast;
