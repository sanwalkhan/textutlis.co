import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';

function App() {
  return (
    <div>
      <Navbar title="TextUtils" about="About Us" Home="Home"/>
      <div className='container my-3'>
      <TextForm heading="Enter Your Text to Analyze"/>
      </div>
      </div>
  );
}

export default App;



