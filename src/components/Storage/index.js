import React from 'react';
import PropTypes from 'prop-types';

class Storage extends React.Component {
  state = { available: false };

  componentDidMount() {
    let isAvailable = false;
    const test = 'test_storage_is_available';
    try {
      localStorage.setItem(test, test);
      isAvailable = !!(localStorage.getItem(test) === test);
      localStorage.removeItem(test);
    } catch (e) {
      isAvailable = false;
    }
    this.setState({ available: isAvailable });
  }

  setItem = (key, val) =>
    this.state.available && localStorage.setItem(key, val);
  getItem = key => this.state.available && localStorage.getItem(key);
  removeItem = key => this.state.available && localStorage.removeItem(key);

  render() {
    <React.Fragment>
      {props => props.children({ setItem, getItem, removeItem })}
    </React.Fragment>;
  }
}

export default Storage;
