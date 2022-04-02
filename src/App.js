import './App.css';
import { useState } from 'react';
import Recharts from './Component/Recharts/Recharts';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Shop from './Component/Shop/Shop';
import Animation from './Component/Animation/Animation';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import ProductDetail from './Component/ProductDetail/ProductDetail';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Header open={open} setOpen={setOpen}></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/recharts' element={<Recharts open={open} setOpen={setOpen}></Recharts>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/animation' element={<Animation></Animation>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
