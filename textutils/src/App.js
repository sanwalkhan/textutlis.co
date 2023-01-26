import { useState } from "react";
import "./App.css";
import Alert from "./components/alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";

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
    }, 1500);
  };

  return (
    <div>
      <Navbar
        title="TextUtils"
        about="About Us"
        Home="Home"
        mode={mode}
        togglemode={toggleMode}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          mode={mode}
          heading="Enter Your Text to Analyze"
        />
      </div>
    </div>
  );
}

export default App;
