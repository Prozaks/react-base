import React from 'react';
import PropTypes from 'prop-types';

const DeathQuantity = ({ death }) => (
  <p>
    Cantidad de Muertes: {`${death}`}
  </p>
);

DeathQuantity.propTypes = {
  death: PropTypes.number.isRequired
};

export default DeathQuantity;