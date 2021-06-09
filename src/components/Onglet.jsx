import React from 'react'
import Button from 'react-bootstrap/Button';

class Onglet extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      
      <Button variant={this.props.isSelected ? "primary" : "outline-dark"}
        onClick={this.props.onClick}>
        {this.props.children}
      </Button>
    )
  }
}
export default Onglet