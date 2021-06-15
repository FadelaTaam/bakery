import React from 'react'
import Card from './Card'

class Pay extends React.Component {
  constructor() {
    super()
    this.state = {
      basket: [''],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    }
  }
  handleSelect(name, price) {
    console.log(name, price)
  }

  render() {

    return (

      <div>
        <p>Total : {this.props.total}</p>
        <p>Total TVA : {this.props.totalTVA}</p>
        <p>Total Eco Tax : {this.props.totalEcoTax}</p>
        <p>Total TTC : {this.props.totalTTC}</p>

        <div className="row">
          {this.props.items.map((item, index) =>
            <div className="col-4 mb-2">
              <Card
                key={index}
                productName={item.name}
                price={item.price}
                onClick={this.handleSelect}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Pay;