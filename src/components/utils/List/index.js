import React from 'react';
import PropTypes from 'prop-types';
import id from 'shortid';

const List = props =>
  props.items.map(item => (
    <props.renderAs {...props} {...item} key={id.generate()} />
  ));

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderAs: PropTypes.func.isRequired
};

export default List;
