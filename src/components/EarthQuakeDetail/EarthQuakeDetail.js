import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../AppHeader/AppHeader';
import * as actions from '../../store/actions/dataActions';
import EarthQuake from './EarthQuake';

const EarthQuakeDetail = (props) => {
  const id = props.match.params.id;

  useEffect(() => {
    props.fetchEqDetailById(id);
  }, [id]);

  return (
    <>
      <AppHeader />
      <EarthQuake eqData={props.eqDetailById} />
    </>
  );
};
const mapStateToProps = (state) => {
  return { eqDetailById: state.eqDetailById };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEqDetailById: (id) => dispatch(actions.fetchEqDetailById(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EarthQuakeDetail);
