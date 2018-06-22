import React from 'react';
import PropTypes from 'prop-types';
import './media.css';

const Media = ({
  direction = 'standard',
  src = '',
  alt = '',
  height = '75px',
  width = '75px',
  children
}) => {
  return (
    <div data-media={direction}>
      <img
        data-media-figure
        height={height}
        width={width}
        src={src}
        alt={alt}
      />
      <div data-media-body>{children}</div>
    </div>
  );
};

export default Media;
