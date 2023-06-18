import React from 'react'
import {AiFillTag} from 'react-icons/ai'
import {BsShieldFillCheck} from 'react-icons/bs'
import {AiFillLock} from 'react-icons/ai'
import {RiMessage2Fill} from 'react-icons/ri'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <hr></hr>
<div className='icen'>
  
  
    <div className='icons'> 
    <AiFillTag className='img'/>
    <p>Выгодные цены</p>
<h6>Продаём более 10 товаров0 со скидками  и промокодами</h6>
<div className='icones'>
<a href='#'>Скидки</a>

<a href='#'>Акции</a>
</div>
     </div>

     <div className='icons'> 
     <AiFillLock className='img'/>
    <p>Безопасные платежи</p>
    <h6>Принимаем оплату всеми популярными способами</h6>
    <div className='icones'>
<a href='#'>Проверенный</a>

<a href='#'>Пороль</a>
</div>
     </div>

     <div className='icons'> 
   <BsShieldFillCheck className='img'/>
    <p>Уверенность в покупке</p>
    <h6>Защищаем интересы покупателя во время и после покупки</h6>
    <div className='icones'>система крат
<a href='#'>Доставка</a>

<a href='#'>Качество</a>
</div>
     </div>
     

     <div className='icons'> 
    <RiMessage2Fill className='img'/>
    <p>Служба поддержки</p>
    <h6>Отвечаем на любые вопросы в чате</h6>
    <div className='icones'>
<a href='#'>Связь</a>

<a href='#'>Отзыв</a>
</div>
     </div>
     </div>

    </footer>
  
  )
}

