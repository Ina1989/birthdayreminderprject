import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Empdetails from "./Components/Empdetails";
import Empbirthday from "./Components/Empbirthday";
import Error from "./Components/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/empdetails" element={<Empdetails />} />
        <Route path="/empbirthday" element={<Empbirthday />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
