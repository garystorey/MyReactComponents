import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';

export function Row(props) {
  let classes = props.seperator ? 'row row-seperator' : 'row';
  classes = props.className ? `${props.className} ${classes}` : classes;
  classes +=
    props.span === 4
      ? 'span4'
      : props.span === 3
        ? 'span3'
        : props.span === 2
          ? 'span2'
          : '';
  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
}

export function Column(props) {
  const classes = props.className ? `column ${props.className}` : 'column';
  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
}

const Grid = { Row, Column };

export default Grid;
