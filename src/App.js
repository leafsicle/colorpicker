import React, { Component } from 'react';
import './index.css';


class App extends Component {
  constructor(props){
    super(props); 
    
    this.state ={
      hue: 34
    }
  }
  hueSliderMove = () => {
    console.log ("I changed")
  }
  saturationSliderMove = () => {
    console.log ("faded")
  }
  lightSliderMove = () => {
    console.log ("lighten up")
  }
  alphaSliderMove = () => {
    console.log ("I am the alpha")
  }
  render() {
    return (
        <body>
          <header>Best Color Blender</header>
          <main className="workspace">
            <aside className= "presentation">
              <main>HSL</main>
              <div className="window">this will be a color</div>
            </aside>

             <aside className="slider-container">
              HUE
              <input onChange={this.hueSliderMove} type="range" min="0" max="360" class="slider hue"/>
              SATURATION
              <input onChange={this.saturationSliderMove} type="range" min="0" max="100" class="slider saturation"/>
              LIGHTNESS
              <input onChange={this.lightSliderMove} type="range" min="0" max="100" class="slider lightness"/>
              ALPHA
              <input onChange={this.alphaSliderMove} type="range" min="0" max="100" class="slider lightness"/>
            </aside>
          </main>
        </body>
      );
  }
}

export default App;
