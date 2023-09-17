import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Category from "./components/Category/Category"
import NewsLetter from "./components/Footer/Newsletter/Newsletter"
import AppContext from "./utils/context";
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
