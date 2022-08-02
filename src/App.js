import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./pages/Company";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/*"} element={<Home />} />
        <Route path={"Company/"} element={<Company />} />
        <Route path={"Catalog/"} element={<Catalog />} />
        <Route path={"Contacts/"} element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
