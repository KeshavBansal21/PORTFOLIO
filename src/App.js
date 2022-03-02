import React from "react";
import About from "./components/About/about";
import Header from "./components/Header/Header";
import Intro from "./components/intro/intro";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Intro />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/product" element={<ProductList/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
