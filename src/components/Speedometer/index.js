// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speed-bg-container">
        <h1 className="speed-heading">SPEEDOMETER</h1>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speed-image"
          />
        </div>
        <h1 className="speed-limit">Speed is {speed}mph</h1>
        <p className="speed-desc">Min limit is 0mph, Max limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="acc-button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="brake-button" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
