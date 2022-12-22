import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact } from "./pages/Index";
import { Header, Footer } from "./components/Index";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
