import React from "react";
import "./App.css";
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }
  // SearchMonster ({ target }) {
  //   this.setState({ searchText: target.value })
  // }
  SearchMonster = ({ target }) => {
    this.setState({ searchText: target.value })
  }
  render () {
    let { monsters, searchText } = this.state
    let filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        {/* <SearchBox searchMonster={({ target }) => this.SearchMonster({ target })} /> */}
        <SearchBox searchMonster={this.SearchMonster} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
