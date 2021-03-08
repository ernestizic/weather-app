import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import IndexPage from './components/pages/IndexPage';
import AboutPage from './components/pages/AboutPage';
import StorePage from './components/pages/StorePage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/store" component={StorePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
