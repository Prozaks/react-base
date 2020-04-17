import React from 'react';
import PropTypes from 'prop-types';

const RecoveredQuantity = ({ recovered }) => (
  <p>
    Cantidad de Recuperados: {`${recovered}`}
  </p>
);

RecoveredQuantity.propTypes = {
  recovered: PropTypes.number.isRequired
};


export default RecoveredQuantity;