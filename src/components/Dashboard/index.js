import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';

import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../config/firestore'
import { CartContext } from '../ShoppingBasket/CartContext'

const Dashboard = () => {
  const [employees, setEmployees] = useState();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { addToCart } = useContext(CartContext);

  const getEmployees = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const employees = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setEmployees(employees)
  }
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  useEffect(() => {
    getEmployees()
  }, []);

  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'ВНИМАНИЕ',
      title: 'Вы уверены?',
      text: "Вы не сможете востановить товар!",
      showCancelButton: true,
      confirmButtonText: 'да',
      cancelButtonText: 'нет',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        deleteDoc(doc(db, "items", id));

        Swal.fire({
          icon: 'успешно',
          title: 'Удалено!',
          text: `товар "${employee.name}" удален`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(employee => employee.id !== id);
        setEmployees(employeesCopy);
      }
    });
  };

  return (
    <div>
      {!isAdding && !isEditing && (
        <>
          <Table
            setIsAdding={setIsAdding}
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleAddToCart={handleAddToCart}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
          getEmployees={getEmployees}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          getEmployees={getEmployees}
        />
      )}
    </div>
  );
};

export default Dashboard;
