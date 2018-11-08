import React, { Component } from 'react'
import './index.css'
class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hue: 200,
			saturation: 50,
			light: 50
		}
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
				saturation: saturation
			}
		})
	}
	lightSliderMove = event => {
		let light = event.target.value

		this.setState((state, props) => {
			return {
				light: light
			}
		})
	}
	// alphaSliderMove = () => {
	//   console.log ("I am the alpha")
	// }

	render() {
		return (
			<div>
				<header>Best Color Blender</header>
				<main className="workspace">
					<aside className="presentation">
						<main>
							HSL({this.state.hue}, {this.state.saturation}%, {this.state.light}
							%)
						</main>

						<div
							className="window"
							style={{
								backgroundColor: `hsl(${this.state.hue}, ${
									this.state.saturation
								}%, ${this.state.light}%)`
							}}
						/>
					</aside>
					<aside className="slider-container">
						HUE
						<input
							onChange={this.hueSliderMove}
							type="range"
							min="0"
							max="360"
							value={this.state.hue}
							className="slider hue"
						/>
						SATURATION
						<input
							onChange={this.saturationSliderMove}
							type="range"
							min="0"
							max="100"
							className="slider saturation"
						/>
						LIGHTNESS
						<input
							onChange={this.lightSliderMove}
							type="range"
							min="0"
							max="100"
							className="slider lightness"
						/>
						ALPHA
						<input
							onChange={this.alphaSliderMove}
							type="range"
							min="0"
							max="100"
							className="slider lightness"
						/>
					</aside>
				</main>
			</div>
		)
	}
}

export default App
