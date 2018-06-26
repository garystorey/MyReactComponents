import React from 'react';
import PropTypes from 'prop-types';
import id from 'shortid';

const ListAsChildren = props => {
  return props.items.map(item => {
    item.key = `listItem-${id.generate()}`;
    return props.children(item);
  });
};

ListAsChildren.propTypes = {
  items: PropTypes.array.isRequired
};

export default ListAsChildren;
