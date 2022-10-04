import { BrowserRouter, Routes, Route } from "react-router-dom";

//import './App.css';

import Home from "./pages/Home/Home"
import List from "./pages/List/list"
import Hotels from "./pages/SingleHotel/Single";
function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="hotels" element={<List />} />
    <Route path="/hotels/:id" element={<Hotels />} />
    </Routes>
    </BrowserRouter>
   );
}
export default App;
