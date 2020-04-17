import React from 'react';
import PropTypes from 'prop-types';

const InfectedQuantity = ({ infected }) => (
  <h2>
    Cantidad total de Infectados: {`${infected}`}
  </h2>

);

InfectedQuantity.propTypes = {
  infected: PropTypes.number.isRequired
};

export default InfectedQuantity;