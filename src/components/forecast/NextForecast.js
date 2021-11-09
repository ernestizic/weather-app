import React, { useContext } from "react";
import { ForecastContext } from "../../contexts/ForecastContext";
import moment from 'moment'
import {
  StyledNextForecast,
  NextForecastHeader,
  NextForecastBody,
  ForecastContainer,
  DayForecast,
  CityImageContainer,
  Container,
  ImgBg,
  CurrentWeather,
} from "../styles/NextForecast.styled";

const NextForecast = () => {
  const { todayForecast } = useContext(ForecastContext);

  console.log(todayForecast)

  return (
    <StyledNextForecast>
      <NextForecastHeader>
        <h1>Next Forecast</h1>
        <button>Five Days</button>
      </NextForecastHeader>

      <NextForecastBody>
        <ForecastContainer>
          {todayForecast &&
            todayForecast.daily.slice(0,5).map((data) => (
              <DayForecast key={data.dt}>
                <p>{moment(data.dt).format("MMM DD")}</p>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon'/>
                <p>{data.temp.day} &deg;c</p>
              </DayForecast>
            ))}
        </ForecastContainer>

        <CityImageContainer>
            <ImgBg>
                <button>{todayForecast.timezone}</button>
                <CurrentWeather>
                    <p>{todayForecast.current.temp}&deg;</p>
                    <img src={`http://openweathermap.org/img/wn/${todayForecast.current.weather[0].icon}@2x.png`} alt='weather icon'/>
                </CurrentWeather>
            </ImgBg>
          <Container>
                <p>{moment(todayForecast.current.dt).format("dddd Do MMMM")}</p>
                <p>{todayForecast.current.weather[0].description}</p>
          </Container>
        </CityImageContainer>
      </NextForecastBody>
    </StyledNextForecast>
  );
};

export default NextForecast;
