import React from "react";
import {AppContainer} from './styles/AppContainer.styled'
import Searchbar from './ui/Searchbar';
import TodayForecast from './forecast/TodayForecast';

// main dashboard component
const Layout = () => {
  return (
    <AppContainer>
      <Searchbar />
      <TodayForecast />
    </AppContainer>
  );
};

export default Layout;
