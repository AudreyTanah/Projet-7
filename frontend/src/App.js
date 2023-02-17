import { BrowserRouter} from "react-router-dom"
import './App.css';
import Routes from "./router"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cards from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Cards />
        <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
