import styled from "styled-components";

export const StyledTodayForecast = styled.div`
  margin-top: 52px;

  h1 {
    font-size: 20px;
    line-height: 31px;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
  }
`;

export const Forecast = styled.div`
  background: #825cf1;
  padding: 20px;
  border: 1px solid #8862fc;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;

export const TimeOfDay = styled.div`
  img {
    width: 60px;
  }
  p {
    font-size: 15px;
    text-align: center;
  }
`;

export const Loader = styled.div`
  text-align: center;
  margin-top: 20%;
`;
