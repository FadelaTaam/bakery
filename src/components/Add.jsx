import React from 'react'

const minPrice = 1;
const maxPrice = 10;

class Add extends React.Component {
  constructor() {
    super()
    this.state = {
      productName: '',
      price: 1,
    }
    this.updatePriceWithBind = this.updatePriceWithBind.bind(this)
  }
  updateProductName = (event) => {
    this.setState({ productName: event.target.value }) // récupère la valeur de l'input et la stocke dans le state productName
    
  }
  updatePrice = (event) => {
    this.setState({ price: event.target.value }) // récupère la valeur du slider et la stocke dans le state price
  }
  updatePriceWithBind() {
    // version avec bind, du coup on peut utiliser this
  }
  sendItem = (e) => {
    this.props.onAdd(this.state.productName, this.state.price)
  }

  render() {
    return (
      <div>
        <input type="text"
          onChange={this.updateProductName}
          className="form-control" />

        <div>
          {this.state.price}€
        </div>

        <input type="range"
          id="price"
          onChange={this.updatePrice}
          className="form-range" />

        <button
        className="btn btn-primary"
        onClick={this.sendItem}>
          Add</button>
      </div>
    )
  }
}
export default Add