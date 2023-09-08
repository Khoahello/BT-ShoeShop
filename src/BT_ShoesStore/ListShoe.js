import React, { Component } from 'react'
import ItemShoe from './ItemShoe'

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item, index) => {
      return <ItemShoe
      handleAddToCart={this.props.handleAddToCart}
      handleShowDetail={this.props.handleShowDetail}
      item={item} key={index}/>
    })
  }
  render() {
    return (
      <div className="row">
        {this.renderListShoe()}
      </div>
    )
  }
}
