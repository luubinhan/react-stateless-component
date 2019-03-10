import React from 'react';
import PropTypes from 'prop-types';

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

const DateTime = ({ date }) => {
  const d = new Date(date);
  
  return isValidDate(d) ? (
    <div className="c-date-time">
      {d.toLocaleDateString()}
    </div>
  ) : <div className="c-date-time">Not a valid date</div>
}

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateTime;