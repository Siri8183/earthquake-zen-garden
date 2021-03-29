import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Title from './Title';

const PageNotFound = () => {
  return (
    <>
      <AppHeader />
      <Title titleText=' Sorry, the requested page does not exist!' />
    </>
  );
};

export default PageNotFound;
