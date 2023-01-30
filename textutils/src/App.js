import { useState } from "react";
import "./App.css";
import Alert from "./components/alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import {
  BrowserRouter as Router,
  Route,  
  Routes,
} from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled Successfully", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled Successfully", "success");
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  return (
    <div>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          Home="Home"
          mode={mode}
          togglemode={toggleMode}
          showAlert={showAlert}
          className = {({ isActive }) =>`nav-link ${isActive && 'active'}`}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
             path="/"
              exact
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter Your Text to Analyze"
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
