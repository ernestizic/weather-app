import styled from "styled-components";
import LagosCity from "../../img/city.jpg";

export const StyledNextForecast = styled.div`
  margin-top: 52px;
  margin-bottom: 80px;
`;

export const NextForecastHeader = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;

  button {
    background-color: #8862fc;
    border-radius: 10px;
    padding: 5px 20px;
    border: none;
    color: #fff;
  }
  h1 {
    font-size: 20px;
    line-height: 31px;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
  }
`;

export const NextForecastBody = styled.div`
  display: flex;
`;

export const ForecastContainer = styled.div`
  background: #825cf1;
  width: 50%;
  margin-top: 29px;
  border-radius: 20px;
  margin-right: 10px;
`;
export const DayForecast = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 15px 10px;
  border-bottom: 1px solid #fff;

  p {
    font-size: 15px;
    margin-top: 14px;
  }

  img {
    width: 60px;
  }
`;

export const CityImageContainer = styled.div`
  width: 50%;
  margin-left: 10px;
  margin-top: 29px;
  border-radius: 20px;
  overflow: hidden;
  background: #825cf1;

  img {
    width: 100%;
    height: 80%;
    position: relative;
  }
`;

export const ImgBg = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${LagosCity});
  height: 80%;
  padding: 20px;
  background-repeat: repeat;
//   background-position: center;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;

  button {
    background: #8862fc;
    border-radius: 10px;
    padding: 10px 20px;
    border: none;
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;


export const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50%;

  p{
    margin-top: 30px;
    font-style: normal;
    font-size: 50px;
  }

  img{
      
      width: 110px;
  }
`;
