import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import CompanyPage from "./pages/CompanyPage";
import CatalogPage from "./pages/CatalogPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
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
        <Route path={"Company/"} element={<CompanyPage />} />
        <Route path={"Catalog/"} element={<CatalogPage data={data} />} />
        <Route path={"Contacts/"} element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
