import React from 'react';
import Loading from '../shared/Loading';

const Profile = ({ userData }) => {
  const style = {
    avatar: {
      width: '100%',
    },
  };

  if (!!userData) {
    return (
      <div className='container'>
        <div className='row' style={{ width: '50%' }}>
          <div className='col-md-4'>
            <img className='avatar' src={userData.avatarImage} alt='profile' />
          </div>
          <div className='col-md-8 '>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>First Name</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{userData.firstName}</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Last Name</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{userData.lastName}</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Phone</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{userData.phone}</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Email</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{userData.email}</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row label'>Bio</div>
              </div>
              <div className='col-md-8'>
                <div className='row field'>{userData.bio}</div>
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

export default Profile;
