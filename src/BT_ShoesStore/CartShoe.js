import React, { Component } from 'react'
import { GIAM_SO_LUONG, TANG_SO_LUONG } from './data'

export default class Cart_Shoe extends Component {
  renderCart=() => {
    let {cart} = this.props
    return cart.map((item, index) => {
      let {name, price, image, soLuong, id} = item
      return (
        <tr>
          <td className='align-middle'>{name}</td>
          <td className='align-middle'>{price}</td>
          <td>
            <img className='inline' width={100} src={image} alt="" />
          </td>
          <td className='align-middle'>
            <button className='btn btn-dark' onClick={() => {
              this.props.handleChangeQuantity(id, GIAM_SO_LUONG)
            }}>-</button>
            <strong className='mx-3'>{soLuong}</strong>
            <button className='btn btn-success' onClick={() => {
              this.props.handleChangeQuantity(id, TANG_SO_LUONG)
            }}>+</button>
          </td>
          <td className='align-middle'>
            <button className='btn btn-danger' onClick={() => {
              this.props.handleRemove(id)
            }}>Delete</button>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </thead>
          <tbody>{this.renderCart()}</tbody>
        </table>
      </div>
    )
  }
}
