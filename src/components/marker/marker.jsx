import React from 'react';
import PropTypes from 'prop-types';
import {markerStyle} from '../../const';

function Marker({text}) {
  return (
    <div style={markerStyle}>
      {text}
    </div>
  );
}

Marker.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};

export default Marker;
