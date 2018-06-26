import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = { available: false, storage: null };
  }

  componentDidMount() {
    let isAvailable = false;
    const test = 'test_storage_is_available';
    const storage =
      this.props.type.toLowerCase() === 'local' ? localStorage : sessionStorage;
    try {
      storage.setItem(test, test);
      isAvailable = !!(storage.getItem(test) === test);
      storage.removeItem(test);
    } catch (error) {
      isAvailable = false;
    }
    this.setState({
      available: isAvailable,
      storage: storage,
      storagetype: this.props.type.toLowerCase()
    });
  }

  setItem(key, val) {
    if (this.state.available) {
      this.state.storage.setItem(key, val);
      return true;
    }
    return false;
  }

  removeItem(key) {
    if (this.state.available) {
      this.state.storage.removeItem(key);
      return true;
    }
    return false;
  }

  getItem(key) {
    if (this.state.available) {
      return this.state.storage.getItem(key);
    }
    return false;
  }

  render() {
    return this.props.children({
      setItem: this.setItem,
      getItem: this.getItem,
      removeItem: this.removeItem,
      isAvailable: this.state.available,
      storage: this.state.storage
    });
  }
}

export default Storage;
