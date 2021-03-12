import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import IndexPage from './components/pages/IndexPage';
import AboutPage from './components/pages/AboutPage';
import StorePage from './components/pages/StorePage';
import BookDetailPage from "./components/pages/BookDetailPage";
import Footer from "./components/ui/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/store" component={StorePage} />
          <Route path="/books/:book_id" component={BookDetailPage}/>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
