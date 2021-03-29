import React from 'react';
import moment from 'moment';
import Loading from '../shared/Loading';
import Title from '../shared/Title';

const EarthQuake = ({ eqData }) => {
  if (!!eqData) {
    const properties = eqData.properties;
    return (
      <div className='container'>
        <div className='row justify-content-around' style={{ width: '100%' }}>
          <Title titleText={eqData?.properties.title} />
        </div>
        <div className='row  justify-content-between'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Title</div>
              </div>
              <div className='col-md-8'>
                <div style={{ width1: '100%' }} className='row field'>
                  {properties.title}
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Magnitude</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{properties.mag}</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Time</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{moment(properties.time).format('LLL')}</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Status</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{properties.status}</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Tsunami</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{properties.tsunami}</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Type</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{properties.type}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default EarthQuake;
