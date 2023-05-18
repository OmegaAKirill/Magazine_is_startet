import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa' //тут пропиши npm i react-icons

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt='не удалось загрузить картинку :('/>
        <h2>{this.props.item.title}</h2>
        <h2>{this.props.item.price}$</h2>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order