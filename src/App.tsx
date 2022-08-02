import './App.css';
import { Component } from 'react';

import Input from './Input';
import List from './List';

type State = {
  fruit?: string
}

type Props = {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      fruit: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  private handleSearch(fruit: string) {
    this.setState({ fruit })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='App-input'>
            <Input HandleSearch={this.handleSearch} />
          </div>
          <div className='App-list'>
            <List Fruit={this.state.fruit} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
