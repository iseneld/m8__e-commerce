import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
