import React, { Component } from 'react'

export default class DetailShoe extends Component {
  render() {
    let {name, price, description, quantity, image} = this.props.detail
    return (
        <div>
          <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{maxWidth: "800px"}}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Shoe detail information</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6">
                        <img className='w-2/3 inline' src={image} alt="" />
                      </div>
                      <div className="col-6 text-left">
                        <div className="row">
                          <div className="col-3 font-medium">Name:</div>
                          <div className="col-9">{name}</div>
                        </div>
                        <div className="row">
                          <div className="col-3 font-medium">Price:</div>
                          <div className="col-9">{price}$</div>
                        </div>
                        <div className="row">
                          <div className="col-3 font-medium">Description:</div>
                          <div className="col-9">{description}</div>
                        </div>
                        <div className="row">
                          <div className="col-3 font-medium">Quantity:</div>
                          <div className="col-9">{quantity}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

