import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";
import ContextProvider from "./store/ContextProvider";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [data, SetData] = useState(null);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("CartProducts"));
    if (!info) localStorage.setItem("CartProducts", JSON.stringify([]));

    fetch("https://trigan00.github.io/jsonapi/products.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetData(data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContextProvider>
      <BrowserRouter>
        <main className={styles.Main}>
          <NavBar />
          <Routes>
            <Route path={"/*"} element={<HomePage />} />
            <Route
              path={"Modular_paintings/"}
              element={
                <CatalogPage data={data} selectedSection="Modular paintings" />
              }
            />
            <Route
              path={"Framed_paintings/"}
              element={
                <CatalogPage data={data} selectedSection="Framed paintings" />
              }
            />
            <Route
              path={"Posters/"}
              element={<CatalogPage data={data} selectedSection="Posters" />}
            />
            <Route
              path={"Clock-paintings/"}
              element={
                <CatalogPage data={data} selectedSection="Clock-paintings" />
              }
            />
            <Route
              path={"Lightboxes/"}
              element={<CatalogPage data={data} selectedSection="Lightboxes" />}
            />
            <Route path={"Cart/"} element={<CartPage />} />
            <Route path={"Checkout/"} element={<CheckoutPage />} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
