import React from 'react';
import PropTypes from 'prop-types';

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

// @TODO: option to pass format

const DateTime = ({
  date,
  locale,
  className
}) => {
  const d = new Date(date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return isValidDate(d) ? (
    <div className={`c-date-time ${className}`}>
      {d.toLocaleDateString(locale, options)}
    </div>
  ) : <div className={`c-date-time ${className}`}>Not a valid date</div>;
};

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
  locale: PropTypes.string,
  className: PropTypes.string
};

DateTime.defaultProps = {
  locale: 'en-US',
  className: ''
};

export default DateTime;
