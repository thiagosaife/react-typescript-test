import { Component } from 'react'

type Props = {
  HandleSearch: Function
}

interface EventObj extends Object {
  [key: string]: any | string
}

class Input extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

  private handleSearch(evt: EventObj) {
    this.props.HandleSearch(evt.target.value)
  }
  render() {
    return (
      <div>
        Search: <input
            data-testid='app-input'
            name="query"
            type="text"
            onChange={this.handleSearch}
            placeholder='Fruit'
          />
      </div>
    )
  }
}

export default Input