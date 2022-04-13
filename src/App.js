import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import Apartment from "./Pages/Apartment";
import "./Styles/normalize.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/apartment" element={<Apartment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
