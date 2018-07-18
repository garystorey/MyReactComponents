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

  render() {
    const len = this.props.limit ? this.props.limit : this.props.items.length;
    return this.props.items.map((item, index) => {
      if (index <= len) {
        if (this.isControlled()) {
          return (
            <this.props.render
              {...this.props}
              {...item}
              key={`listitem-${id.generate()}`}
            />
          );
        } else {
          item.key = `listItem-${id.generate()}`;
          return this.props.children(item);
        }
      }
    });
  }
}

export default List;
