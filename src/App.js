import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import CatalogPage from "./pages/CatalogPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/*"} element={<HomePage />} />
        <Route path={"Company/"} element={<CompanyPage />} />
        <Route path={"Catalog/"} element={<CatalogPage />} />
        <Route path={"Contacts/"} element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
