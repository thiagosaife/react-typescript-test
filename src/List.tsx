import { Component } from 'react'

type State = {
  fruits?: string[]
  filtered?: string[]
}

type Props = {
  Fruit?: string
}

class List extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      fruits: [
        'Apple',
        'Pineapple',
        'Banana',
        'Orange',
        'Mango',
        'Peach',
        'Strawberry',
      ],
    }
  }

  handleSearch() {
    return this.state.fruits?.filter((f) => {
      if (this.props.Fruit) {
        return f.toLowerCase().indexOf(this.props.Fruit.toLocaleLowerCase()) !== -1
      }
      return null
    })
    .map((f, i) => <li key={i}>{f}</li>)
  }

  handleFruits() {
    if (this.state.fruits && this.state.fruits.length) {
      return this.state.fruits.map((f, i) => <li key={i}>{f}</li>)
    }
    return []
  }

  render() {
    return (
      <div>
        <ul data-testid='app-list'>
          {
            this.props.Fruit ? this.handleSearch() : this.handleFruits()
          }
        </ul>
      </div>
    )
  }
}

export default List