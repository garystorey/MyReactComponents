import React, { PureComponent } from 'react';

class Mickey extends PureComponent {
  initialState = () => ({
    x: this.props.x || 0,
    y: this.props.y || 0
  });

  getXY = () => ({ x: this.state.x, y: this.state.y });

  state = {
    ...this.initialState(),
    getXY: this.getXY
  };

  onMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  render() {
    return this.props.children({ ...this.state });
  }
}

export default Mickey;
