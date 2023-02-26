import './App.css';
import {  Routes, Route  } from "react-router-dom";
import Home from './Components/Home';
import SharedLayouts from './Components/SharedLayouts'
import Error from './Components/Error';
import Movie from './Components/Movie';
import SearchResult from './Components/SearchResult';
import Search from './Components/Search';
import NavSearch from './Components/NavSearch';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<SharedLayouts/>}>
      <Route index element={<Home/>}/>
      <Route path="/Movie/:movieID" element={<Movie/>}/>
      <Route path = "/Search" element = {<Search/>}/>
      <Route path ="/NavSearch" element={<NavSearch/>}/>
      <Route path = "/SearchResult/:movieName" element = {<SearchResult/>}/>
      <Route path = '*' element = {<Error/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
