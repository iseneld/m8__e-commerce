import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Apartment from "./Pages/Apartment";
import Home from "./Pages/Home";
import Payment1 from "./Pages/Payment1";
import Payment2 from "./Pages/Payment2";
import Payment3 from "./Pages/Payment3";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay1" element={<Payment1 />} />
        <Route path="/pay2" element={<Payment2 />} />
        <Route path="/pay3" element={<Payment3 />} />
        <Route path="/apartment" element={<Apartment/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
