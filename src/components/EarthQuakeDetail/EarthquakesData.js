import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/dataActions';
import Loading from '../shared/Loading';
import DataTable from '../tableData/DataTable';
import Title from '../shared/Title';

class EarthquakesData extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }
  render() {
    const { error, loading, data } = this.props;

    if (error) {
      return <Title titleText='Sorry, some error occured while loading the details' />;
    }
    if (loading) {
      return <Loading />;
    } else {
      if (data.length > 0)
        return (
          <div>
            <Title titleText='USGS All Earthquakes, Past Hour' />
            <DataTable data={data} />
          </div>
        );
      else return <Title titleText='Sorry, No data available' />;
    }
  }
}

const mapStateToProps = (state) => {
  const { data, error, loading } = state;
  return { data, error, loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllData: () => dispatch(actions.fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EarthquakesData);
