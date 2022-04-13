import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment1";
import Payment2 from "./Pages/Payment2";
import "./Styles/normalize.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/pay2" element={<Payment2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
