import React from 'react';
import PropTypes from 'prop-types';

// Destructuring: { region } create variable with same name from param
const Region = ({ region }) => (
  <div>
    <h1>
      {`${region}`}
    </h1>
  </div>
);

Region.propTypes = {
  region: PropTypes.string.isRequired
};

export default Region;