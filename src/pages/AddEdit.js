import React, {useState, useEffect,} from 'react'
import Swal from 'sweetalert2';
import firebase, { db, firestore, } from '../firebase';
import { collection,  getDoc, addDoc,deleteDoc, getDocs, doc} from 'firebase/firestore'
import './AddEdit.css'



const AddEdit = () => {
//   const [posts, setPosts] = useState([])
//   const ref = firebase.firestore().collection('items')

//   function getData() {
//     ref.onSnapshot((QuerySnapshot) => {
//         const items = []
//         QuerySnapshot.forEach((doc) => {
//             items.push(doc.data())
//         })
//         setPosts(items)
//     })
// }
//   useEffect(() =>{
//     getData()
//   }, [])

//   console.log(posts);
  const [employee, setEmployee] = useState('')
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const getEmployee = async () => {
    const QuerySnapshot = await getDocs(collection(db, "items"))
    const employee = QuerySnapshot.docs.map(doc =>({id:doc.id, ...doc.data()}))
    setEmployee(employee)
  }

  useEffect(() => {
    getEmployee()
  }, [])


          
  return (
    <main>
      {employee.length > 0 ? (
      employee.map((item) => 
        <div className="item" key={item.id}>
            <img src={item.img} alt='не удалось загрузить картинку :('/>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
            <p className='category'>{item.category}</p>
            <div className='add-to-card'>+</div>
            
        </div>)
      ): <h1>загрузка</h1>}


    </main>
  )
}

export default AddEdit