import React, { Component } from 'react'

export default class ItemShoe extends Component {
  render() {
    return (
      // <div className="card text-left col-4">
      //   <img className="card-img-top" alt />
      //   <div className="card-body">
      //     <h4 className="card-title">name</h4>
          // <div>
          //   <button
          //     className="btn btn-success"
          //     // onClick={() => {
          //     //   handleAdd(item);
          //     // }}
          //   >
          //     Add
          //   </button>
          //   <button
          //     className="btn btn-dark "
          //     data-toggle="modal"
          //     data-target="#modelId"
          //     // onClick={() => handleShowDetail(item)}
          //   >
          //     Detail
          //   </button>
          // </div>
      //   </div>
      // </div>
<div className="col-4">
  <div className="card text-center">
    <img className="card-img-top w-5" src="http://svcy3.myclass.vn/images/adidas-prophere.png" alt />
    <div className="card-body">
      <h4 className="card-title">Name</h4>
      <h5 className="price">Giá$</h5>
      <div>
            <button
              className="btn btn-success"
              // onClick={() => {
              //   handleAdd(item);
              // }}
            >
              Add
            </button>
            <button
              className="btn btn-dark "
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
