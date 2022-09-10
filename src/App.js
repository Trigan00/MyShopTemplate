import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";
import Context from "./context/context";

function App() {
  const [data, SetData] = useState(null);
  const [inCartProducts, SetInCartProducts] = useState(
    JSON.parse(localStorage.getItem("CartProducts"))
  );

  const increaseProductHandler = (id) => {
    const cartProductsList = JSON.parse(localStorage.getItem("CartProducts"));
    const newarr = [...cartProductsList];

    const cartItemIndex = newarr.findIndex((item) => item.id === id);
    newarr.splice(cartItemIndex, 1, {
      ...cartProductsList[cartItemIndex],
      ItemCount: cartProductsList[cartItemIndex].ItemCount + 1,
    });
    localStorage.setItem("CartProducts", JSON.stringify(newarr));
    SetInCartProducts(newarr);
  };

  const decreaseProductHandler = (id) => {
    const cartProductsList = JSON.parse(localStorage.getItem("CartProducts"));
    const newarr = [...cartProductsList];

    const cartItemIndex = newarr.findIndex((item) => item.id === id);
    newarr.splice(cartItemIndex, 1, {
      ...cartProductsList[cartItemIndex],
      ItemCount: cartProductsList[cartItemIndex].ItemCount - 1,
    });
    localStorage.setItem("CartProducts", JSON.stringify(newarr));
    SetInCartProducts(newarr);
  };

  // const value = {
  //   inCartProducts: inCartProducts,
  //   SetInCartProducts: SetInCartProducts,
  //   addProduct: addProductHandler,
  //   delProduct: delProductHandler,
  // };

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("CartProducts"));
    if (!info) localStorage.setItem("CartProducts", JSON.stringify([]));
    fetch("https://trigan00.github.io/jsonapi/products.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider
      value={{
        inCartProducts: inCartProducts,
        SetInCartProducts: SetInCartProducts,
        increaseProductHandler: increaseProductHandler,
        decreaseProductHandler: decreaseProductHandler,
      }}
    >
      <BrowserRouter>
        <main className={styles.Main}>
          <NavBar />
          <Routes>
            <Route path={"/*"} element={<HomePage />} />
            <Route
              path={"Hats/"}
              element={<CatalogPage data={data} selectedSection="Шапки" />}
            />
            <Route
              path={"Hoodies/"}
              element={<CatalogPage data={data} selectedSection="Худи" />}
            />
            <Route
              path={"Jackets/"}
              element={<CatalogPage data={data} selectedSection="Куртки" />}
            />
            <Route
              path={"Pants/"}
              element={<CatalogPage data={data} selectedSection="Штаны" />}
            />
            <Route
              path={"Sneakers/"}
              element={<CatalogPage data={data} selectedSection="Кроссовки" />}
            />
            <Route
              path={"T-Shirts/"}
              element={<CatalogPage data={data} selectedSection="Футболки" />}
            />
            <Route path={"Cart/"} element={<CartPage />} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
