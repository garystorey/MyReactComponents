import React from 'react';

const Text = ({
  size = '10px',
  color = '#000',
  bgColor = '#FFF',
  children
}) => {
  const styles = {
    color: color,
    backgroundColor: bgColor,
    fontSize: size
  };
  return <div style={styles}>{children}</div>;
};

export default Text;
