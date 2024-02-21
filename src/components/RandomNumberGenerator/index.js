// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generate = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState({
      count: number,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="whole-container">
        <div className="inner-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="result">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
