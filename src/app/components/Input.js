import React from 'react';
import Input from 'react-toolbox/lib/input';
import themedInput from '../theme/themedInput.scss';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        rgb: '',
        hex: ''
    };
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
    this.props.onStateChange(this.state);
  };

  render () {
      return (
          <section className={themedInput.wrapper}>
            <Input type='text' label='RGB' name='rgb' value={this.state.rgb} onChange={this.handleChange.bind(this, 'rgb')} maxLength={9 } theme={themedInput} />
            <Input type='text' label='HEX' name='hex' value={this.state.hex} onChange={this.handleChange.bind(this, 'hex')} maxLength={6 } theme={themedInput} />
          </section>
      );
  }
}

export default Inputs;
