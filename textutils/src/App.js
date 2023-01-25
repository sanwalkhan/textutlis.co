import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/textForm";
// <TextForm heading="Enter Your Text to Analyze" />


function App() {
  return (
    <div>
      <Navbar title="TextUtils" about="About Us" Home="Home" />
      <div className="container my-3">

     


    <About/>
      </div>
    </div>
  );
}

export default App;
