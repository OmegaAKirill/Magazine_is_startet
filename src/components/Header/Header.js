import React, {useEffect, useState} from 'react';
import './Header.css'
import {Link, useLocation} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa' //тут пропиши npm i react-icons
import Order from '../Order';
// import {FaTrash} from 'react-icons/fa'

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("Home")
    const location = useLocation()

    useEffect(()=> {
        if(location.pathname === "/"){
            setActiveTab("Home")
        }else if(location.pathname==="/add"){
            setActiveTab("AddContact")
        }else if (location.pathname==="/about"){
            setActiveTab("About")
        }
    }, [location])
    return (
        <header>
            <div className='header'>
                <p className='logo'>Мир одежды</p>
                <div className='header-right'>
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")} >основная</p>
                </Link>
                <Link to="/CreatEdit">
                    <p className={`${activeTab === "CreatEdit" ? "active" : ""}`} onClick={() => setActiveTab("CreatEdit")}>создать товар</p>
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddContact" ? "active" : ""}`} onClick={() => setActiveTab("AddContact")}>товар</p>
                </Link>
                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active" : ""}`} onClick={() => setActiveTab("About")}><FaShoppingCart onClick={() =>setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/></p>
                </Link>
                </div>
                

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                         showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            {/* <div className='presentation'></div> */}
        </header>
    );
}

const showOrders = (props) =>{
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return(
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

const showNothing =()=>{
    return(
        <div className='empty'>
            <h2>корзина пуста</h2>
        </div>
    )

    
}

export default Header;
