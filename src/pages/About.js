import React from 'react'
import {FaTrash} from 'react-icons/fa' //тут пропиши npm i react-icons

const About = () => {
  return (
    <div>
        <h2>
          <img src={"./img/" + this.props.item.img} alt='не удалось загрузить картинку :('/>
          {/* <h2>{post.name}</h2>
          <h2>{post.price}$</h2> */}
          <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
        </h2>
    </div>
  )
}

export default About