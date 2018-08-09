import React from 'react';
import PropTypes from 'prop-types';
import id from 'shortid';

class List extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    render: PropTypes.func,
    limit: PropTypes.number
  };

  _isMounted = false;

  isControlled = () => this.props.render !== undefined;

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  shouldComponentUpdate() {
    return this._isMounted;
  }
  render() {
    const len = this.props.limit || this.props.items.length;
    return this.props.items.map((item, index) => {
      item.key = item.key || id.generate();
      if (index <= len) {
        return this.isControlled() ? (
          <this.props.render {...item} {...this.props} />
        ) : (
          this.props.children(item)
        );
      }
    });
  }
}

export default List;
