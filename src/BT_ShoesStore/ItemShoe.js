import React, { Component } from 'react'

export default class ItemShoe extends Component {
  render() {
    let {image, name, price} = this.props.item
    return (

<div className="col-4">
  <div className="card text-left">
    <img className="card-img-top w-5" src={image} alt />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="price">{price}$</h6>
      <div>
            <button
              className="btn btn-success mr-28"
              onClick={() => {this.props.handleAddToCart(this.props.item);}}
            >
              Add to cart
              <i class="las la-shopping-cart"></i>
            </button>
            <button
              className="btn btn-info "
              data-toggle="modal"
              data-target="#modelId"
              // onClick={() => handleShowDetail(item)}
            >
              Detail
            </button>
      </div>
    </div>
  </div>
</div>

      // <div>ItemShoe</div>
    )
  }
}
