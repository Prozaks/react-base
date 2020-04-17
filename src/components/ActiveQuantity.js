import React from 'react';
import PropTypes from 'prop-types';

const ActiveQuantity = ({ active }) => (
  <p>
    Casos Activos: {`${active}`}
  </p>
);

ActiveQuantity.propTypes = {
  active: PropTypes.number.isRequired
};

export default ActiveQuantity;