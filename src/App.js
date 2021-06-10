import React from 'react'
import './App.css'
import Onglet from "./components/Onglet.jsx"
import Add from './components/Add.jsx'
import List from './components/List'
import Pay from './components/Pay'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: 'add',
      items: [],
    }
  }
  onClick = (e) => {
    this.setState({ selectedTab: e.target.name })
  }
  addItem = (name, price) => {
    const itemToAdd = { name: name, price: price }
    this.setState({ items: [...this.state.items, itemToAdd] });
    console.log(this.state.items)
  };

  render() {
    return (
      <div className="App">
        <h1>Bakery</h1>
        <Onglet
          isSelected={this.state.activeTab === "add"}
          onClick={() => this.setState({ activeTab: "add" })}>
          Add
        </Onglet>

        <Onglet
          isSelected={this.state.activeTab === "list"}
          onClick={() => this.setState({ activeTab: "list" })}>
          List
        </Onglet>

        <Onglet
          isSelected={this.state.activeTab === "pay"}
          onClick={() => this.setState({ activeTab: "pay" })}>
          Pay
        </Onglet>
        <br />
        {this.state.activeTab === 'add' && <Add onAdd={this.addItem} />}

        {this.state.activeTab === 'list' && <List />}

        {this.state.activeTab === 'pay' && <Pay />}

      </div>
    )
  }
}
export default App
