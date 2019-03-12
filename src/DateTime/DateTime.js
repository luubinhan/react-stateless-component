import React from 'react';
import PropTypes from 'prop-types';

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

const DateTime = ({ date, className }) => {
  const d = new Date(date);

  return isValidDate(d) ? (
    <div className={`c-date-time ${className}`}>
      {d.toLocaleDateString()}
    </div>
  ) : <div className={`c-date-time ${className}`}>Not a valid date</div>;
};

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string
};

DateTime.defaultProps = {
  className: ''
};

export default DateTime;
