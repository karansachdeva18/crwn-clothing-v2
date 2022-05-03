import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route  index element={<Home />} exact/>
      <Route  path='shop' element={<Shop />} exact/>
      <Route  path='auth' element={<Authentication />} exact/>
      </Route>
      
    </Routes>
  )
}

export default App