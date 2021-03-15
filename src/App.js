import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import IndexPage from './components/pages/IndexPage';
import AboutPage from './components/pages/AboutPage';
import FreeBookPage from './components/pages/FreeBookPage';
import BookDetailPage from "./components/pages/BookDetailPage";
import Social from "./components/ui/Social";
//import Footer from "./components/ui/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Social />
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/freebook" component={FreeBookPage} />
          <Route path="/books/:book_id" component={BookDetailPage}/>
        </Switch>

      </div>
    </BrowserRouter>
  );
}



export default App;
