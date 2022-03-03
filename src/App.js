import React, { useContext } from "react";
import About from "./components/About/about";
import Header from "./components/Header/Header";
import Intro from "./components/intro/intro";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          style={{
            backgroundColor: darkMode ? "#1a1c1d" : "white",
            color: darkMode && "white",
          }}
        >
          <Header />
          <Toggle />
          <Routes>
            <Route exact path="/" element={<Intro />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/product" element={<ProductList />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
