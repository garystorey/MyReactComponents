import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    loaded: PropTypes.bool
  };

  static initialState = {
    loaded: !!this.isControlled,
    toggle: () => {},
    data: []
  };

  isControlled = () => {
    return this.props.url !== undefined;
  };

  state = this.initialState;

  toggle = on => {
    this.state(prevState => {
      return { loaded: !prevState.loaded };
    });
  };

  componentDidMount() {
    const that = this;
    if (this.isControlled() && this.props.url) {
      fetch(this.props.url)
        .then(res => res.json())
        .then(res => {
          that.setState(prevState => {
            return {
              loaded: !prevState.loaded,
              data: res
            };
          });
          that.state.data = res;
        });
    }
  }
  componentWillUnmount() {}

  render() {
    return this.props.children(...this.state);
  }
}

export default Loader;
