import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  const [data, SetData] = useState(null);

  useEffect(() => {
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
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
