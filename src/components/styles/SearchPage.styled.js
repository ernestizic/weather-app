import styled from "styled-components";

export const StyledSearchPage = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
  max-width: 832px;
  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 10px;
  }
`;

export const ForecastContainer = styled.div`
  border: 1px solid #8862fc;
  background: #825cf1;
  border-radius: 20px;
  text-align: center;
  max-width: 416px;
  margin: 77px auto;
  padding: 20px 0 60px 0;
`;

export const Weather = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin-top: 35px;
  }
  span {
    font-size: 12px;
  }
`;

export const Degree = styled.p`
  font-size: 65px;
  font-stretch: extra-condensed;
`;

export const Country = styled.p`
  margin-top: 20px;
`;

export const Back = styled.button`
  position: absolute;
  top: 5px;
  left: -100px;
  background: #825cf1;
  color: #fff;
  border: none;
  padding: 10px 10px 7px 10px;
  border-radius: 10px;
  font-size: 20px;

  &:hover{
    cursor: pointer;
  }
  &:focus{
      background: #825cf1;
  }

  @media (max-width: 480px) {
    top: 40px;
    left: 10px;
  }
`;
