import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import SearchPage from "./components/SearchPage";
import GlobalStyles from "./components/styles/GlobalStyles";
import ForecastContextProvider from "./contexts/ForecastContext";
import SearchCityContextProvider from "./contexts/SearchCityContext";

function App() {
  return (
    <ForecastContextProvider>
      <SearchCityContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Switch>
            <Route exact path='/'>
              <Layout />
            </Route>
            <Route path='/search' component={SearchPage} />
          </Switch>
        </BrowserRouter>
      </SearchCityContextProvider>
    </ForecastContextProvider>
  );
}

export default App;
