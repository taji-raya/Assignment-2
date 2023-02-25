import './App.css';
import {  Routes, Route  } from "react-router-dom";
import Home from './Components/Home';
import SharedLayouts from './Components/SharedLayouts'
import Error from './Components/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<App.js/>}/>
        <Route/>
      </Routes>

    </div>
  );
}

export default App;
