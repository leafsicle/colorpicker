import React, { Component } from 'react'
import './index.css'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: this.getRandomColor(),
      saturation: this.getRandomColor(),
      light: this.getRandomColor(),
      alpha: 1,
    }
  }
  getRandomColor = () => {
    return Math.floor(Math.random() * 255)
  }

  hueSliderMove = event => {
    let hue = event.target.value

    this.setState((state, props) => {
      return { hue: hue }
    })
  }
  saturationSliderMove = event => {
    let saturation = event.target.value

    this.setState((state, props) => {
      return {
        saturation: saturation,
      }
    })
  }

  lightSliderMove = event => {
    let light = event.target.value
    this.setState((state, props) => {
      return {
        light: light,
      }
    })
  }

  alphaSliderMove = event => {
    let alpha = event.target.value
    this.setState((state, props) => {
      return {
        alpha: alpha,
      }
    })
  }

  render() {
    return (
      <div>
        <header>Best Color Blender</header>
        <main
          className='workspace'
          style={{
            backgroundColor: `rgba(${this.state.hue},${this.state.saturation},${this.state.light},${this.state.alpha})`,
          }}>
          {/* convert the values to hex here */}
          {/* <span className="hexVal">#</span> */}
        </main>
        <aside className='slider-container'>
          <span>Red {this.state.hue}</span>
          <input
            onChange={this.hueSliderMove}
            type='range'
            min='0'
            max='255'
            value={this.state.hue}
            className='slider hue'
          />
          <span>Green {this.state.saturation}</span>
          <input
            onChange={this.saturationSliderMove}
            type='range'
            min='0'
            max='255'
            className='slider saturation'
          />
          <span>Blue {this.state.light}</span>
          <input
            onChange={this.lightSliderMove}
            type='range'
            min='0'
            max='255'
            className='slider lightness'
          />
          <span>Visibility %{this.state.alpha}</span>
          <input
            onChange={this.alphaSliderMove}
            type='range'
            min='0'
            max='1'
            step='.01'
            className='slider alpha'
          />
        </aside>
      </div>
    )
  }
}

export default App
