import React, {useContext, useState } from 'react';
import '../../css/full.css'
import { CartContext } from '../ShoppingBasket/CartContext';



const Table = ({ employees, handleEdit, handleDelete, setIsAdding }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const handleAddToCart = (employee) => {
    addToCart(employee);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const handleAllClick = () => {
    setSelectedCategory('');
  };
  const filteredEmployees = selectedCategory
    ? employees.filter((employee) => employee.category === selectedCategory)
    : employees;
  return (

    <div >
      <div>
        <button className='btn' onClick={() => setIsAdding(true)}>добавить</button>
      </div>
      <div >
        <button className='category-btn' onClick={handleAllClick}>Всё</button>
        <button className='category-btn' onClick={() => handleCategoryClick('обувь')}>Обувь</button>
        <button className='category-btn' onClick={() => handleCategoryClick('футболка')}>футболки</button>
        <button className='category-btn' onClick={() => handleCategoryClick('кофта')}>кофты</button>
        <button className='category-btn' onClick={() => handleCategoryClick('свитер')}>свитера</button>
      </div>
      <main>
        {employees ? (
            filteredEmployees.map((employee, i) => (
              <div className="item" key={employee.id}>
                <img src={employee.img} alt='не удалось загрузить картинку :('/>
                <h2>{employee.name}</h2>
                <p>{employee.desc}</p>
                <p className='category'>{employee.category}</p>
                <b>{employee.price} $</b>
                <div className='add-to-card' onClick={() => handleAddToCart(employee)}>+</div>
                <div className='delete-edit'>
                  <div>
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="btn"
                  >
                    изменить
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="btn"
                  >
                    удалить
                  </button>
                </div>
                </div>
                
              </div>
            ))
          ) : (
            <h1>загрузка...</h1>
          )}
      </main>
      
          
        
    </div>
  );
};

export default Table;
