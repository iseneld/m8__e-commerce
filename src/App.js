import { Router, Route } from "react-router-dom";
import Main from "./Pages/Main";
import "./App.css";

// It seems Router is the new "Routes" tag in React Router DOM syntax.
// "Routes" isn't available, and "Router" seems to be working.

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Main />} />
      </Router>
    </div>
  );
}

export default App;
