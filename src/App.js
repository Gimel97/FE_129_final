import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home  from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';

function App() {  
  return (
    <div className="App">
        <Header />
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </>
        <Footer />
      </div>
  );
}

export default App;
