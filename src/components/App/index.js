import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route,  } from "react-router-dom"
import { CartProvider } from '../ShoppingBasket/CartContext';
import "../../css/index.css"
import "../../css/dark-theme.css"



import Dashboard from '../Dashboard';
import Header from '../Dashboard/Header';
import Seting from '../Seting/Seting';
import Orders from '../Order/Orders'
import Home from '../Home/Home';


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : '');
  }, [isDarkTheme]);
  
  
  return (
    <div className={`fon ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className={`wrapper ${isDarkTheme ? 'dark-theme' : ''}`}>
      <BrowserRouter>
        <CartProvider>
          <Header isDarkTheme={isDarkTheme} />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/Seting" element={<Seting toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>} />
            <Route exact path="/Orders" element={<Orders />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      </div>
    </div>
      
   
  );
};

export default App;
