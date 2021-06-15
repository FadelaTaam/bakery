import React, { Component } from 'react'

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      image: '/images/item.png'
    }
  }
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.state.image}
          alt=""
          onClick={() => this.props.onClick(this.props.productName, this.props.price)}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.productName}</h5>
          <p className="card-text">{this.props.price} €</p>
        </div>
      </div>
    )
  }
}
export default Card