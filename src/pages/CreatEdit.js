import { collection,  getDoc, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'
import React, { useState }  from 'react'
import { db, firestore } from '../firebase'
import firebase from '../firebase'
import Swal from 'sweetalert2'
import selectEmployee, {employee,  setEmployee, setEditing, getEmployee} from "./AddEdit"


const CreatEdit = () => {
    const id = selectEmployee.id
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const handleAdd = e =>{
        e.preventDefault()

        if (!name || !desc || !img || !category || !price){
            return Swal.fire({
                icon: 'error',
                title: "err",
                text: 'err',
                showConfirmButton: true
            })
        }
        const employee = {
            id,
            name,
            desc,
            img,
            category,
            price,
        }

        employee.push(newEmp)
       
    //    setEmployee(employee)
    //    setIsAdding(false)
    //    setEmployee()
       

       Swal.fire({
            icon:'success',
            title: 'добавленно',
            text: `у ${employee.name}  ${employee.desc} обновлена дата`,
            showConfirmButton: false,
            timer: 1500
     })
    }
  
    return (
        <div className="small-container">
      <div onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={img}
          onChange={e => setImg(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </div>
    </div>
    )
}

export default CreatEdit
