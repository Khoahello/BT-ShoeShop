import React, { Component } from 'react'
import ListShoe from './ListShoe'
import CartShoe from './CartShoe'
import DetailShoe from './DetailShoe'
import { TANG_SO_LUONG, shoeArr } from './data'

export default class Ex_Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
    detail: {},
  }
  handleAddToCart = (shoe) => {
    let cloneCart = this.state.cart
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id
    })
    if (index == -1) {
      // sp chưa có
      let newShoe = {...shoe, soLuong: 1}
      cloneCart.push(newShoe)
      console.log("🤣 ~ file: Ex_Shoe.js:22 ~ Ex_Shoe ~ cloneCart:", cloneCart)
    } else {
      // đã có
      cloneCart[index].soLuong++
      console.log("🤣 ~ file: Ex_Shoe.js:26 ~ Ex_Shoe ~ cloneCart:", cloneCart)
    }
    this.setState ({
      cart: cloneCart
    })
  }
  handleRemove = (idShoe) => {
    let cloneCart = this.state.cart
    let index = cloneCart.findIndex((item) => {
      return item.id === idShoe
    })
    cloneCart.splice(index, 1)
    this.setState({cart: cloneCart})
  }
  handleChangeQuantity = (idShoe, option) => {
    let cloneCart = this.state.cart
    let index = cloneCart.findIndex((item) => {
      return item.id === idShoe
    })
    if (option == TANG_SO_LUONG) {
      cloneCart[index].soLuong++
    } else {
      cloneCart[index].soLuong--
      cloneCart[index].soLuong == 0 && this.handleRemove(idShoe)
    }
    this.setState ({
      cart: cloneCart
    })
  }
  render() {
    return (
      <div className='container'>
        <header>
          <h1 className='font-weight-light'>Shoes Shop</h1>
        </header>
          <ListShoe list={this.state.shoeArr} handleAddToCart={this.handleAddToCart}/>
          
        <h1 className='font-weight-light'>Cart <i class="las la-shopping-cart"></i></h1>
        <CartShoe cart={this.state.cart} handleRemove={this.handleRemove} handleChangeQuantity={this.handleChangeQuantity}/>
        <DetailShoe/>
      </div>
    )
  }
}
