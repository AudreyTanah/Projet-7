//Ce qu'il y aura dans toutes mes pages - après import d'App dans index.js
import { BrowserRouter} from "react-router-dom"
import Routes from "./router"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
