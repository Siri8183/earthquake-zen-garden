import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../AppHeader/AppHeader';
import Profile from './Profile';
import Title from '../shared/Title';
import * as actions from '../../store/actions/dataActions';

const User = (props) => {
  useEffect(() => {
    props.fetchUserData();
  }, []);

  return (
    <>
      <AppHeader />
      <Title titleText='Profile' />
      <Profile userData={props.userData} />
    </>
  );
};

const mapStateToProps = (state) => {
  return { userData: state.profileData };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(actions.fetchUserData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
