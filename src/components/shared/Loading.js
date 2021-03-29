import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return <Loader style={{ textAlign: 'center' }} type='TailSpin' color='#777777' height={100} width={100} />;
};

export default Loading;
