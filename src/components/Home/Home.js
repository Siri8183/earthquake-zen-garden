import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import EarthquakesData from '../EarthQuakeDetail/EarthquakesData';
import Title from '../shared/Title';

const Home = () => {
  return (
    <>
      <AppHeader />
      <EarthquakesData />
    </>
  );
};

export default Home;
