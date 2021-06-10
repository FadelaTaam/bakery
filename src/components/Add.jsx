import React from 'react'
class Add extends React.Component {
  constructor () {
    super()
    this.state = {
      productName: '',
      price: 1,
    }
    this.updatePriceWithBind = this.updatePriceWithBind.bind(this)
  }
  updateProductName = (event) => {
    this.setState({ productName: event.target.value }) // récupère la valeur de l'input et la stocke dans le state productName
  console.log(event.target.value)
}
  updatePrice = (event) => {
    this.setState({ price: event.target.value }) // récupère la valeur du slider et la stocke dans le state price
  }
  updatePriceWithBind() {
    // version avec bind, du coup on peut utiliser this
  }
  render () {
    return (
      <div>
        <input type="text" onChange={this.updateProductName} className="form-control"/>
        <input type="range" onChange={this.updatePrice} className="form-range"/>
        <button className="btn btn-primary">Add</button>
      </div>
    )
  }
}
export default Add