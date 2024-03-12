import React from 'react'
import { UseCart } from '../Context/cartContext';
function Header() {
    const {count} = UseCart();
  return (
    <header >
    <nav>
      <h1>UseReducer</h1>

      <div className='box1'>
      <i class="fa-solid fa-cart-plus"></i>
      <div className='box2'>
      <h1 className='cart-count'>{count}</h1>
      </div>
      </div>
      </nav>
    </header>
  )
}

export default Header
