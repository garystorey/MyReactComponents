import React from 'react';
import PropTypes from 'prop-types';

const Show = props => !!props.when && props.children;

Show.propTypes = {
  when: PropTypes.bool.isRequired
};

export default Show;
