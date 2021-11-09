import React from "react";
import {AppContainer} from './styles/AppContainer.styled'
import Searchbar from './ui/Searchbar';
import TodayForecast from './forecast/TodayForecast';

const Layout = () => {
  return (
    <AppContainer>
      <Searchbar />
      <TodayForecast />
    </AppContainer>
  );
};

export default Layout;
