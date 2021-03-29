import React from 'react';

const style = {
  textAlign: 'center',
  fontWeight: 'bold',
  padding: '20px',
};

const Title = ({ titleText }) => {
  return <h4 style={style}>{titleText}</h4>;
};

export default Title;
