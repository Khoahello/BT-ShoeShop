import React, { Component } from 'react'
import ListShoe from './ListShoe'
import CartShoe from './CartShoe'
import DetailShoe from './DetailShoe'
import { shoeArr } from './data'

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
    detail: {},
  }
  render() {
    return (
      <div className='container'>
        <header>
          <h1 className='font-weight-light'>Shoes Shop</h1>
        </header>
        <div className="row">
          <ListShoe list={this.state.shoeArr}/>
          
        </div>
        <h1 className='font-weight-light'>Cart <i class="las la-shopping-cart"></i></h1>
        <CartShoe/>
        <DetailShoe/>
      </div>
    )
  }
}
