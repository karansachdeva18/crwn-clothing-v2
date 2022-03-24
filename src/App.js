import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/signIn/sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route  index element={<Home />} exact/>
      <Route  path='shop' element={<Shop />} exact/>
      <Route  path='sign-in' element={<SignIn />} exact/>
      </Route>
      
    </Routes>
  )
}

export default App