import { Routes, Route } from "react-router-dom";
import { API_BASE_URL } from "./config";
import { createContext, useEffect, useState } from "react";

// STYLES
import "reactjs-popup/dist/index.css";

// COMPONENTS
import Footer from "./Components/Footer";
import Header from "./Components/Header";

// PAGES
import Apartment from "./Pages/Apartment";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import MarketplacePage from "./Pages/MarketplacePage";
import Payment1 from "./Pages/Payment1";
import Payment2 from "./Pages/Payment2";
import AboutUs from "./Pages/AboutUs";
import Payment3 from "./Pages/Payment3";
import RegisterPage from "./Pages/RegisterPage";
import UserPage from "./Pages/UserPage";

export const UserContext = createContext();

function App() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    async function fetchApts() {
      const response = await fetch(`${API_BASE_URL}/apartments`);
      const result = await response.json();
      setApartments(result);
    }

    fetchApts();
  }, []);

  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("Token: ", token);
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home apartments={apartments} />} />
        <Route path="/pay1" element={<Payment1 />} />
        <Route path="/pay2" element={<Payment2 />} />
        <Route path="/pay3" element={<Payment3 />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/apartment/:aptNumber" element={<Apartment />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
      </Routes>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;

