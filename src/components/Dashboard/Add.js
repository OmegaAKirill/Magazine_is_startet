import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../../css/full.css'

import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../config/firestore'


const Add = ({ employees, setEmployees, setIsAdding, getEmployees }) => {
  const [name, setname] = useState('');
  const [desc, setdesc] = useState('');
  const [img, setimg] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!name || !desc || !img || !category || !price) {
      return Swal.fire({
        icon: 'ошибка',
        title: 'Ошибка!',
        text: 'Все поля обязательны для заполнения',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      name,
      desc,
      img,
      category,
      price,
    };

    employees.push(newEmployee);

    try {
      await addDoc(collection(db, "items"), {
        ...newEmployee
      });
    } catch (error) {
      console.log(error)
    }

    setEmployees(employees);
    setIsAdding(false);
    getEmployees()

    Swal.fire({
      icon: 'успешно',
      title: 'добавлено!',
      text: `данные добавленны`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form className='form' onSubmit={handleAdd}>
        <h1>добавление товара</h1>
        <label htmlFor="name">название товара</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          className="inp"
          onChange={e => setname(e.target.value)}
        />
        <label htmlFor="desc">описание товара</label>
        <input
          id="desc"
          type="text"
          name="desc"
          value={desc}
          className="inp"
          onChange={e => setdesc(e.target.value)}
        />
        <label htmlFor="img">картинка товара (url)</label>
        <input
          id="img"
          type="img"
          name="img"
          value={img}
          className="inp"
          onChange={e => setimg(e.target.value)}
        />
        <label htmlFor="category">категория товара</label>
        <select className='inp' type='text' onChange={e=> setcategory(e.target.value)}>
          <option value="">выбирете категорию</option>
          <option value="обувь">обувь</option>
          <option value="футболка">футболка</option>
          <option value="кофта">кофта</option>
          <option selected="" value="свитер">свитер</option>
        </select>
        <label htmlFor="price">стоимость товара</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={e => setprice(e.target.value)}
        />
        <div style={{ marginTop: '30px', display:'flex' }}>
          <input className='btn' type="submit" value="добавить" />
          <input
            style={{ marginLeft: '12px' }}
            className="btn"
            type="button"
            value="назад"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
