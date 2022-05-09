import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import Authentication from './routes/authentication/authentication';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} exact />
          <Route path="shop" element={<Shop />} exact />
          <Route path="auth" element={<Authentication />} exact />
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default App;
