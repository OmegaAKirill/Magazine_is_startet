import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../config/firestore'

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing, getEmployees }) => {
  const id = selectedEmployee.id;

  const [name, setname] = useState(selectedEmployee.name);
  const [desc, setdesc] = useState(selectedEmployee.desc);
  const [img, setimg] = useState(selectedEmployee.img);
  const [category, setgategory] = useState(selectedEmployee.category);
  const [price, setprice] = useState(selectedEmployee.price);

  const handleUpprice = async (e) => {
    e.preventDefault();

    if (!name || !desc || !img || !category || !price) {
      return Swal.fire({
        icon: 'ошибка',
        title: 'Ошибка!',
        text: 'Все поля обязательны для заполнения',
        showConfirmButton: true,
      });
    }

    const employee = {
      name,
      desc,
      img,
      category,
      price,
    };

    await setDoc(doc(db, "items", id), {
      ...employee
    });

    setEmployees(employees);
    setIsEditing(false);
    getEmployees()

    Swal.fire({
      icon: 'Упех',
      title: 'Изменено!',
      text: `Данные обновленны`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form className='form' onSubmit={handleUpprice}>
        <h1>изменить товар</h1>
        <label htmlFor="name">название товара</label>
        <input
          className="inp"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={e => setname(e.target.value)}
        />
        <label htmlFor="desc">описание товара</label>
        <input
          id="desc"
          className="inp"
          type="text"
          name="desc"
          value={desc}
          onChange={e => setdesc(e.target.value)}
        />
        <label htmlFor="img">картинка товара (url)</label>
        <input
          id="img"
          className="inp"
          type="img"
          name="img"
          value={img}
          onChange={e => setimg(e.target.value)}
        />
        <label htmlFor="category">категория товара</label>
        <input
          id="category"
          className="inp"
          type="text"
          name="category"
          value={category}
          onChange={e => setgategory(e.target.value)}
        />
        <label htmlFor="price">стоимость товара</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={e => setprice(e.target.value)}
        />
        <div style={{ marginTop: '30px', display:"flex" }}>
          <input className='btn' type="submit" value="изменить" />
          <input
            style={{ marginLeft: '12px' }}
            className='btn'
            type="button"
            value="назад"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
