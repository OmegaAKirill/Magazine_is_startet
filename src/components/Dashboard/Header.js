import React, {useState,  useEffect, useContext} from 'react';
import '../../css/full.css'
import {Link, useLocation} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../ShoppingBasket/CartContext';



const Header = ({toggleTheme, isDarkTheme}) => {
  let [cartOpen, setCartOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")
  const location = useLocation()
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);


  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const totalPrice = getTotalPrice();
  

    useEffect(()=> {
        if(location.pathname === "/"){
            setActiveTab("Home")
        }else if(location.pathname==="/add"){
            setActiveTab("Dashboard")
        }else if (location.pathname==="/Order"){
            setActiveTab("Order")
        }else if (location.pathname==="/Seting"){
            setActiveTab("Seting")
        }
        
    }, [location])
  return (
    <header>
      <div className={`header ${isDarkTheme ? 'dark-theme' : 'light'}`}>
        <p>Мир Одежды</p>
        <div className='header-right'>
        <Link to="/"  >
        <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")} >основная</p>
        </Link>
        <Link to="/Dashboard"  >
          <p className={`${activeTab === "Dashboard" ? "active" : ""}`} onClick={() => setActiveTab("Dashboard")}>товар</p>
        </Link>

        <p className={`shop-cart-button ${cartOpen && 'active'}`}><FaShoppingCart onClick={() =>setCartOpen(cartOpen = !cartOpen)} /> {cart.length}</p>
        
        <Link to="/Seting">
          <p className={`${activeTab === "Seting" ? "active" : ""}`} onClick={() => setActiveTab("Seting")}>настройки</p>
        </Link>

        {cartOpen && (
                    <div className='shop-cart'>
                        {cart.map((item) => (
                          <div className='cart-items' key={item.id}>
                          <img src={item.img} alt="не удалось загрузить картинку:("/>
                          <div>
                            <h3>{item.name}</h3>
                          
                          <button className='btnn' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                            -
                          </button>
                            <b>{item.price} (x{item.quantity})</b>
                          <button className='btnn' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                            +
                          </button>
                          </div>
                          

                          <p className='delete' onClick={() => handleRemoveFromCart(item.id)}>
                            Удалить
                          </p>
                          </div>
                          
                        ))}
                        
                        <Link to="/Orders">
                          <p className='order'>заказать</p>
                        </Link>
                        
                        <p className='summa'>Общая сумма: {totalPrice}$</p>
                        
                    </div>
                    
                )}

        
      </div>
      </div>
      
      
      
    </header>
  );
};

export default Header;
