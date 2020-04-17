import React from 'react';
import PropTypes from 'prop-types';

const TotalTested = ({ tested }) => (
  <p>
    Test realizados: {`${tested}`}
  </p>
);

TotalTested.propTypes = {
  tested: PropTypes.number.isRequired
};

export default TotalTested;

