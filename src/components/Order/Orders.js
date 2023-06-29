import React, {useContext} from 'react'
import { CartContext } from '../ShoppingBasket/CartContext';
import './Order.css'


const Orders = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };
  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };
  const totalPrice = getTotalPrice();
  return (
    <div className='form-order'>
        <div className='orders'>
          {cart.map((item) => (
                          <div className='cart-items-order'>
                          <img src={item.img} alt="не удалось загрузить картинку:("/>
                          <div>
                            <h3>{item.name}</h3>
                          
                          <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                            -
                          </button>
                            <b>{item.price} (x{item.quantity})$</b>
                          <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                            +
                          </button>
                          </div>
                          

                          <p onClick={() => handleRemoveFromCart(item.id)} className='delete'>
                            Удалить
                          </p>
                          </div>
                          
                        ))}
        </div>
                        
                        <from className='form' >
                          <p>Общая сумма: {totalPrice}$</p>
                          <label>адресс</label>
                          <input type="text" />
                          
                        </from>
    </div>
  )
}

export default Orders