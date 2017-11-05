import React from 'react';
import PropTypes from 'prop-types';
import UserActions from '../UserActions/UserActions';
import './User.css';

const User = (props) => {
  const {user} = props;
  let componentStyle = {};
  user.image && (componentStyle = {...componentStyle, backgroundImage: `url("${user.image}")`});
  user.color && user.color.length === 6 && (componentStyle = {...componentStyle, backgroundColor: `#${user.color}`});
  return (
    <div className="User">
      <div className="User-avatar" style={componentStyle}></div>
      <div className="User-text">
        <p className="User-name">
          <span className="User-info--bold">{`${user.first_name} ${user.last_name}`}</span>
          <span className="User-location">{user.location}</span>
        </p>
        <p className="User-info">
          <span className="User-info--bold">{user.team}</span>
          <span className="User-title">{user.title}</span>
        </p>
        <div className="User-buttons">
          <UserActions user={user} />
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User;
