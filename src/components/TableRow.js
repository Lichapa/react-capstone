import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const { param, value } = props;
  return (
    <tr className="table-row">
      <td>{param}</td>
      <td>{value.toLocaleString()}</td>
    </tr>
  );
};

TableRow.propTypes = {
  param: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TableRow;
