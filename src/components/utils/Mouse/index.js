import React, { PureComponent } from 'react';

class Mickey extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { x: this.props.x || 0, y: this.props.y || 0 };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = event => {
    event.preventDefault();
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return this.props.children({ ...this.state });
  }
}

export default Mickey;
