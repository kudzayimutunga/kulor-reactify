import React from 'react';
import Main from './theme/main.scss';
import ColourHelper from './helper/colourHelper.js';

import Inputs from './components/Input.js';
import Sliders from './components/Slider.js';
import Header from './components/Header.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rgb: '',
            hex: '',
            hue: 0,
            saturation: 0,
            lightness: 0,
            type: "",
            isDark: true,
            bgColour: "5B3256"
        };
    }

    handleStateChange = (data) => {
        if (ColourHelper.validateColours(data)) {
            this.setState(ColourHelper.convertColours(data));
        } else {
            this.setState(data);
        }
    }

    render() {
        return (
            <div className={Main.fullPage} style={{backgroundColor: "#" + this.state.bgColour }}>
                <Header />
                <div className={Main.centerControls}>
                    <Inputs rgb={this.state.rgb} hex={this.state.hex} type={this.state.type} onStateChange={this.handleStateChange.bind(this)}/>
                    <Sliders hue={this.state.hue} saturation={this.state.saturation} lightness={this.state.lightness} type={this.state.type} onStateChange={this.handleStateChange.bind(this)}/>
                </div>
            </div>
        )
    }
};

export default App;
