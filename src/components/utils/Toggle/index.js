import React from 'react';
import PropTypes from 'porp-types';

//render props
//state/prop reducers
//state/prop getters

class Toggle extends React.Component {
  static propTypes = {
    isOn: PropTypes.bool,
    onToggle: PropTypes.func
  };

  initialState = {
    on: this.props.isOn || false
  };

  state = this.initialState;

  toggle = () => {
    this.setState(
      ({ on }) => ({
        on: !on
      }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };
  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default Toggle;
