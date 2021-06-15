import React from 'react'

class List extends React.Component {
  render () {
   
    return (
      <div>
        List
        <ul className="list-group">
          {this.props.items.map(
            (item, index) => <li key={index} className="list-group-item">
            {item.name} {item.price}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default List;