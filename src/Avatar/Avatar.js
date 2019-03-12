import React from 'react';
import PropTypes from 'prop-types';
import getIconByName from './helpers/getIconByName';
import './Avatar.scss';

const Avatar = ({ name, src }) => {
  const iconName = getIconByName(name);
  const classIcon = name ? 'color-' + name.charAt(0).toLowerCase() : '';
  return (
    <div className="app-logo">
      {(src) ? (
        <div className="img-logo">
          <img src={src} alt={name} />
        </div>
      ) : (
        <div className={`app-icon ${classIcon}`}>
          {iconName}
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string
};

Avatar.defaultProps = {
  src: ''
};

export default Avatar;
