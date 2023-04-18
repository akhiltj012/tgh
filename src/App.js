
import './App.css';
import { Home } from './Home/Home';
import { Bookmark } from './Bookmark/Bookmark';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
   <Routes>
  <Route path='/' element={<Home/>}/> 
  <Route path='/bookmark' element={<Bookmark/>}/>
   </Routes>
    </div>
  );
}

export default App;
