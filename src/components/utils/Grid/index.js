import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';

export function Row(props) {
  const classes = props.className ? `row ${props.className}` : 'row';
  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
}

Row.propTypes = {
  classes: PropTypes.string
};

export function Column(props) {
  const classes = props.className ? `column ${props.className}` : 'column';
  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
}

Column.propTypes = {
  classes: PropTypes.string
};

const Grid = { Row, Column };

export default Grid;
