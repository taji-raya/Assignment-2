import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './Components/Home';
import SharedLayouts from './Components/SharedLayouts'
import Error from './Components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SharedLayouts/>}>
      <Route index element={<Home/>}/>
      <Route path='*' element = {<Error/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
