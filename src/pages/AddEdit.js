import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import './AddEdit.css'
import fireDb from '../firebase'
import {toast} from "react-toastify"

const initialState = {
  name: "",
  email: "",
  contact: ""
}

const AddEdit = () => {
  const [state, setState] = useState(initialState)
  const [data, setData] = useState({})

  const {name, email, contact} = state

  const handleImputChange = (e) => {
    const{name, value} = e.target
    setState({...state, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact){
      toast.error("pls provide value in each input diled")
    }else{
      fireDb.child("contact")
    }
  }
  return (
    <div style={{marhinTop:"100px"}}>
        <form style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center'}} onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type="text" id='name' name='name' placeholder='u name' value={name} onChange={handleImputChange}/>

          <label htmlFor='email'>email</label>
          <input type="email" id='email' name='email' placeholder='u email' value={email} onChange={handleImputChange}/>

          <label htmlFor='contact'>contact</label>
          <input type="contact" id='contact' name='contact' placeholder='contact' value={contact} onChange={handleImputChange}/>
        
          <input type="submit" value="Save"/>
        </form>
    </div>
  )
}

export default AddEdit